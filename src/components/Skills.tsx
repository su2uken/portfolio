const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Go", "REST API", "GraphQL"],
  },
  {
    title: "Infrastructure",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub Actions", "Figma", "VS Code", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-accent uppercase">
        Skills
      </h2>
      <h3 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        技術スタック
      </h3>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-card-border bg-card-bg p-6"
          >
            <h4 className="mb-4 text-lg font-semibold text-accent">
              {category.title}
            </h4>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
