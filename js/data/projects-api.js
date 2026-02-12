export async function loadProjectsFromCMS() {
  const res = await fetch("/.netlify/functions/projects", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}