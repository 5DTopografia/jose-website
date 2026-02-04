// js/core/filters.js

// Required by main.js — DO NOT REMOVE
export function initFilters() {
  // Filters UI not implemented yet
  // Placeholder to keep app stable
}

// Pure helper (used later by UI)
export function filterProjectsByService(projects, serviceType) {
  if (serviceType === "all") return projects;
  return projects.filter(p => p.serviceType === serviceType);
}