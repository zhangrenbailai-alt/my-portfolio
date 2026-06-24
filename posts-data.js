const POSTS = [

   { 
    id: "20260623-post2",       // ファイル名から.htmlを除いたもの
    tag: "novel",               // タグ名
    title: "追加で表紙をつけて完成",  // 記事タイトル
    date: "2026.06.23",          // 日付
    url: "posts/20260623-post2.html"  // ファイルのパス
  },

   { 
    id: "20260623-post1",       // ファイル名から.htmlを除いたもの
    tag: "novel",               // タグ名
    title: "正方形の小説を書く",  // 記事タイトル
    date: "2026.06.23",          // 日付
    url: "posts/20260623-post1.html"  // ファイルのパス
  },

  { 
    id: "20260622-post2",       // ファイル名から.htmlを除いたもの
    tag: "calligraphy",               // タグ名
    title: "画用紙に貼って仕上げ",  // 記事タイトル
    date: "2026.06.22",          // 日付
    url: "posts/20260622-post1.html"  // ファイルのパス
  },

   { 
    id: "20260620-post7",       // ファイル名から.htmlを除いたもの
    tag: "novel",               // タグ名
    title: "小説のアイデア",  // 記事タイトル
    date: "2026.06.20",          // 日付
    url: "posts/20260620-post7.html"  // ファイルのパス
  },

   { 
    id: "20260620-post6",       // ファイル名から.htmlを除いたもの
    tag: "questionnaire",               // タグ名
    title: "とりあえず完成・どう演出するかは今度考える",  // 記事タイトル
    date: "2026.06.20",          // 日付
    url: "posts/20260620-post6.html"  // ファイルのパス
  },

   { 
    id: "20260620-post5",       // ファイル名から.htmlを除いたもの
    tag: "questionnaire",               // タグ名
    title: "claude先生に相談",  // 記事タイトル
    date: "2026.06.20",          // 日付
    url: "posts/20260620-post5.html"  // ファイルのパス
  },

   { 
    id: "20260620-post4",       // ファイル名から.htmlを除いたもの
    tag: "questionnaire",               // タグ名
    title: "仕組みを考える",  // 記事タイトル
    date: "2026.06.20",          // 日付
    url: "posts/20260620-post4.html"  // ファイルのパス
  },
    
   { 
    id: "20260620-post3",       // ファイル名から.htmlを除いたもの
    tag: "letter",               // タグ名
    title: "何を作るか",  // 記事タイトル
    date: "2026.06.20",          // 日付
    url: "posts/20260620-post3.html"  // ファイルのパス
  },

   { 
    id: "20260620-post2",       // ファイル名から.htmlを除いたもの
    tag: "letter",               // タグ名
    title: "QRコードを手で描くという行為自体を作品化したい",  // 記事タイトル
    date: "2026.06.20",          // 日付
    url: "posts/20260620-post2.html"  // ファイルのパス
  },

   { 
    id: "20260620-post1",       // ファイル名から.htmlを除いたもの
    tag: "questionnaire",               // タグ名
    title: "インタラクティブな小作品を作りたい",  // 記事タイトル
    date: "2026.06.20",          // 日付
    url: "posts/20260620-post1.html"  // ファイルのパス
  },

  { 
    id: "20260618-post2",       // ファイル名から.htmlを除いたもの
    tag: "calligraphy",               // タグ名
    title: "北斎まんが風QRコードの制作",  // 記事タイトル
    date: "2026.06.18",          // 日付
    url: "posts/20260618-post2.html"  // ファイルのパス
  },

  { 
    id: "20260618-post1",       // ファイル名から.htmlを除いたもの
    tag: "calligraphy",               // タグ名
    title: "ひらがな風QRコードの制作",  // 記事タイトル
    date: "2026.06.18",          // 日付
    url: "posts/20260618-post1.html"  // ファイルのパス
  },

　{ 
    id: "20260617-post1",       // ファイル名から.htmlを除いたもの
    tag: "calligraphy",               // タグ名
    title: "漢字風QRコードの制作",  // 記事タイトル
    date: "2026.06.17",          // 日付
    url: "posts/20260617-post1.html"  // ファイルのパス
  },

 { 
    id: "20260616-post2",       // ファイル名から.htmlを除いたもの
    tag: "calligraphy",               // タグ名
    title: "どうやって読み込み可能なQRコード書道を作るか",  // 記事タイトル
    date: "2026.06.16",          // 日付
    url: "posts/20260616-post2.html"  // ファイルのパス
  },

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