"use client";

import { useMemo, useState } from "react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: {
    live: string;
    code: string;
  };
};

type Props = {
  projects: Project[];
};

export default function ProjectGallery({ projects }: Props) {
  const [active, setActive] = useState("All");

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => set.add(tag)));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.tags.includes(active));
  }, [active, projects]);

  return (
    <div className="work-block">
      <div className="filters">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`chip ${active === tag ? "active" : ""}`}
            onClick={() => setActive(tag)}
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid work-grid">
        {filtered.map((project) => (
          <article key={project.title} className="card work-card">
            <div className="card-header">
              <h3>{project.title}</h3>
              <span>Case Study</span>
            </div>
            <p>{project.description}</p>
            <ul className="meta">
              {project.tags.map((tag) => (
                <li key={`${project.title}-${tag}`}>{tag}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.links.code} target="_blank" rel="noreferrer">
                Source
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
