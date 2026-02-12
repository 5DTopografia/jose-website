import fs from "fs";
import path from "path";

export async function handler() {
  try {
    const filePath = path.join(process.cwd(), "content", "settings", "technology-slider.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      body: JSON.stringify({ slides: [] }),
    };
  }
}