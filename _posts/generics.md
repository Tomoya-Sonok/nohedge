---
title: 'ジェネリクスを知ろう'
excerpt: 'フロントエンドエンジニアとなり最初のプロジェクトに参画後、環境構築が終わって意気揚々とソースコードを読み始めた私は...'
date: '2022-12-28'
---

フロントエンドエンジニアとなり最初のプロジェクトに参画後、環境構築が終わって意気揚々とソースコードを読み始めた私は、`<T>`や `ComponentPropsWithRef<typeof Hoge>`のような見たことのない記法を目にして早速つまずいてしまった。
情報を漁っても「型の抽象化」「再利用性の向上や型安全性の維持のため...」など難しい言葉が出てきてなかなか理解できなかったので、少しまとめてみる。

### ジェネリクスってなに？

[ジェネリクス](https://www.typescriptlang.org/docs/handbook/2/generics.html)とは、語弊を恐れずに簡略化すると「**使われるときまで具体的な型を決めなくてもよい型の入れ物**」である。日本語で**総称型**とも呼ばれている。

```ts
// 基本的なジェネリクスの書き方
type Something<T> = {
  value: T
}

const var1: Something<string> = {
  value: 'hoge', // T というジェネリクスにstring型を指定したので、var1.valueはstring型
}

const var2: Something<number> = {
  value: 1, // T というジェネリクスにnumber型を指定したので、var2.valueはnumber型
}
```

Something という型定義を利用するときに初めて`string`や`number`といった型が決まる。
これによって、`string`型の Something と`number`型の Something をそれぞれ用意する手間が省ける。

次に関数に対してジェネリクスを使った例も読んでみる。

```ts
// 引数に入れたものがそのまま返却される関数 （アロー関数の場合、引数の()の前にジェネリクスを書きます)
const func = <T>(args: T) => {
  return { value: args }
}

// T に number[]を指定したので、引数にはnumber型の配列を指定しないと型エラーとなる
func<number[]>([1, 2, 3])

// また、関数のジェネリクスは暗黙的に型が解決される仕組みがあり、
// ジェネリクスを使ったからといって利用時に必ず型指定しなくてもよい
func('hogehoge') // 暗黙的にTはstring型とみなされる
func(false) // 暗黙的にTはboolean型とみなされる
```

### いろいろな制約の付け方

ジェネリクスに**初期値**を与えることで、型の安全性を上げて決められた型が守られやすくできる。

```ts
type Fuga<T = string> = {
  value: T
}

const var1: Fuga = {
  value: 'Hello world', // 初期値として指定されたstring型なのでOK
}
const var2: Fuga = {
  value: 1, // 初期値として指定されていないnumber型なのでエラー
}
const var3: Fuga<number> = {
  value: 1, // ジェネリクスの T がnumber型で上書きされたのでOK
}
```

また、以下のように`extends`によって型制約をつけることもできる。

```ts
type Piyo<T extends string> = {
  // T はstring型の性質をもつ型しか受けつけない
  value: T
}

const var1: Piyo<string> = {
  // string型なのでOK
  value: 'Hello world',
}
const var2: Piyo<'piyo'> = {
  // "piyo"というリテラル型はstring型を拡張したものなのでOK
  value: 'piyo',
}
const var3: Piyo<number> = {
  // number型はstring型の制約を満たしていないのでエラーとなる
  value: 123,
}
```

実際の開発案件では、一つの型定義に複数のジェネリクスが使われていたり、バックエンド側（サーバ）から返ってくるレスポンスの型を次項で説明する getServerSideProps で受け取る props の型と一致させるために使っていたり、応用的な書き方もたくさんある。

ただ上記で説明した基本的な書き方を最低限理解しておけば、それらの型の管理についてもある程度はキャッチアップしやすくなるはずだ。

以上。

Qiita アドベントカレンダー 2022 にて寄稿した転載元の記事は[こちら](https://qiita.com/wlcmty/items/fcf5be68c830349fa122)

Tomoya Sonok
