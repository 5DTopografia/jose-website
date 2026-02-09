export async function loadProjectsFromCMS() {
    const indexResponse = await fetch("/content/projects/index.json", { cache: "no-store" });
    if (!indexResponse.ok) return [];
  
    const files = await indexResponse.json();
  
    const projects = await Promise.all(
      files.map(async (file) => {
        const res = await fetch(`/content/projects/${file}`, { cache: "no-store" });
        if (!res.ok) return null;
        return res.json();
      })
    );
  
    return projects.filter(Boolean).filter(p => p.visible !== false);
  }