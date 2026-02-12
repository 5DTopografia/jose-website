// netlify/functions/projects.js
import fs from "fs";
import path from "path";

export async function handler() {
  try {
    // Netlify function runs from repo root
    const projectsDir = path.join(process.cwd(), "content", "projects");

    if (!fs.existsSync(projectsDir)) {
      return json(200, []);
    }

    // Read all json files except index.json (if it exists)
    const files = fs
      .readdirSync(projectsDir)
      .filter((f) => f.endsWith(".json"))
      .filter((f) => f.toLowerCase() !== "index.json");

    const projects = files
      .map((file) => {
        const fullPath = path.join(projectsDir, file);
        const raw = fs.readFileSync(fullPath, "utf-8");
        const data = JSON.parse(raw);

        // ✅ Normalize fields so your frontend can keep using:
        // project.images (array of strings)
        // project.videos (array of strings)
        const cover = data.coverImage ? [data.coverImage] : [];
        const gallery =
          Array.isArray(data.galleryImages)
            ? data.galleryImages.map((x) => x?.image).filter(Boolean)
            : [];

        // Your CMS config uses videos as list of objects: [{ url: "..." }]
        const videos =
          Array.isArray(data.videos)
            ? data.videos
                .map((v) => (typeof v === "string" ? v : v?.url))
                .filter(Boolean)
            : [];

        const images =
          Array.isArray(data.images) && data.images.length
            ? data.images // backward compatibility with older files
            : [...cover, ...gallery];

        return {
          ...data,
          images,
          videos,
          _file: file, 
        };
      })
      .filter((p) => p && p.visible !== false);

    return json(200, projects);
  } catch (err) {
    return json(500, { error: "Failed to load projects", details: String(err) });
  }
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      // helpful to avoid caching while debugging
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(body),
  };
}