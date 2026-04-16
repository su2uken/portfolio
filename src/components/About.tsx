export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-accent uppercase">
        About
      </h2>
      <h3 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        自己紹介
      </h3>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            はじめまして、鈴木健介です。ソフトウェアエンジニアとして、
            フロントエンドからバックエンドまで幅広い技術領域で開発を行っています。
          </p>
          <p>
            クリーンなコードとユーザーファーストな設計を心がけ、
            チームと協力しながらプロダクトの価値を最大化することを目指しています。
          </p>
          <p>
            新しい技術のキャッチアップを欠かさず、常に成長し続けるエンジニアでありたいと考えています。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "20+", label: "Projects Completed" },
            { value: "10+", label: "Technologies" },
            { value: "100%", label: "Passion" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-card-border bg-card-bg p-6 text-center"
            >
              <span className="text-3xl font-bold text-accent">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
