const hobbies = [
  {
    title: "読書",
    description:
      "技術書からビジネス書、小説まで幅広いジャンルを読書。新しい視点や知識を吸収することが好きです。",
    icon: "📚",
  },
  {
    title: "旅行",
    description:
      "国内外を問わず、新しい場所を訪れて文化や食に触れることが趣味。写真を撮りながら思い出を残します。",
    icon: "✈️",
  },
  {
    title: "ランニング",
    description:
      "週末は近所の公園でランニング。体を動かすことでリフレッシュし、健康維持にも役立てています。",
    icon: "🏃",
  },
  {
    title: "料理",
    description:
      "和洋中問わず、レシピを見ながら新しい料理に挑戦。家族や友人と食卓を囲む時間が好きです。",
    icon: "🍳",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-accent uppercase">
        Hobbies
      </h2>
      <h3 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        趣味
      </h3>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title}
            className="rounded-2xl border border-card-border bg-card-bg p-6 text-center"
          >
            <span className="mb-4 block text-4xl" aria-hidden="true">
              {hobby.icon}
            </span>
            <h4 className="mb-3 text-lg font-semibold text-accent">
              {hobby.title}
            </h4>
            <p className="text-sm leading-relaxed text-muted">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
