# Next.js + TailwindCSS + Vercel 技術ブログ

TypeScript 製でマークダウン記法対応の[こちらのテンプレート](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)を使用した。

`/_posts`に格納したマークダウンファイルがブログ記事として追加される仕組みとなっており、マークダウンから HTML へ変換し Props としてページ内で使用するのに以下のモジュールが使われている。

- [`remark`](https://github.com/remarkjs/remark)
- [`remark-html`](https://github.com/remarkjs/remark-html)
- [`gray-matter`](https://github.com/jonschlinkert/gray-matter)

# TODO

- プロフィール画面を 8 割は作る
- 投稿する記事の整理、ブログ用メモの準備
