const POSTS = [
 { 
    id: "20260616-post1",       // ファイル名から.htmlを除いたもの
    tag: "calligraphy",               // タグ名
    title: "QRコードに書道のニュアンスを加える",  // 記事タイトル
    date: "2026.06.16",          // 日付
    url: "posts/20260616-post1.html"  // ファイルのパス
  },

   { 
    id: "20260615-post1",       // ファイル名から.htmlを除いたもの
    tag: "concept",               // タグ名
    title: "Webサイトの開設と制作の計画",  // 記事タイトル
    date: "2026.06.15",          // 日付
    url: "posts/20260615-post1.html"  // ファイルのパス
  },
  
];

// 日付で降順ソートして返す（常に新しい順）
const POSTS_SORTED = [...POSTS].sort((a, b) => {
  return new Date(b.date.replace(/\./g, "-"))
       - new Date(a.date.replace(/\./g, "-"));
});