const POSTS = [
  {
    id: "post4",
    tag: "novel",
    title: "小説の文字組をQRコードにする実験",
    date: "2024.12.28",
    url: "posts/post4.html"
  },
  {
    id: "post3",
    tag: "concept",
    title: "タワマンと電子書籍とQRコード——コンセプトを固める",
    date: "2025.01.05",
    url: "posts/post3.html"
  },
  {
    id: "post2",
    tag: "letter",
    title: "手紙の便箋に印刷するQRコードのサイズ検討",
    date: "2025.01.12",
    url: "posts/post2.html"
  },
  {
    id: "post1",
    tag: "calligraphy",
    title: "書道の試作、三度目でやっと読み込めた",
    date: "2025.01.15",
    url: "posts/post1.html"
  }
];

// 日付で降順ソートして返す（常に新しい順）
const POSTS_SORTED = [...POSTS].sort((a, b) => {
  return new Date(b.date.replace(/\./g, "-"))
       - new Date(a.date.replace(/\./g, "-"));
});