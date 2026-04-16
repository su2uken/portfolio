const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Next.jsとStripeを使用したフルスタックECサイト。レスポンシブデザインで快適なショッピング体験を提供。",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "リアルタイム同期機能を備えたタスク管理アプリ。チームコラボレーションを効率化。",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    link: "#",
  },
  {
    title: "AI Chat Bot",
    description:
      "OpenAI APIを活用したインテリジェントチャットボット。自然な会話でユーザーをサポート。",
    tags: ["Python", "FastAPI", "OpenAI", "Docker"],
    link: "#",
  },
  {
    title: "DevOps Dashboard",
    description:
      "Kubernetesクラスタのモニタリングダッシュボード。リアルタイムでインフラの状態を可視化。",
    tags: ["Go", "React", "Kubernetes", "Prometheus"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-accent uppercase">
        Projects
      </h2>
      <h3 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        プロジェクト
      </h3>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="group rounded-2xl border border-card-border bg-card-bg p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
          >
            <h4 className="mb-3 text-xl font-semibold transition-colors group-hover:text-accent">
              {project.title}
            </h4>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
