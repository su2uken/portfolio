export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
        Software Engineer
      </p>
      <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
        Kensuke Suzuki
      </h1>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted">
        モダンなWebアプリケーションの開発に情熱を注ぐエンジニア。
        <br />
        ユーザー体験とコード品質の両方を大切にしています。
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-card-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Contact
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <svg
          className="h-6 w-6 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
