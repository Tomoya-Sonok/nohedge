---
title: 'getServerSidePropsの使いかた'
excerpt: 'Next.jsでは CSR（クライアントサイドレンダリング）とSSR（サーバサイドレンダリング）を使い分けることが可能であり、getServerSidePropsは...'
date: '2022-12-28'
---

Next.js では **CSR（クライアントサイドレンダリング）**と**SSR（サーバサイドレンダリング）**を使い分けることが可能であり、getServerSideProps は**SSR の実現のためにサーバ側で用意したデータや処理等を props として page コンポーネントに渡してくれる関数**である。具体的な仕組みや書き方を理解するために少しまとめておく。

### 具体的にどうやって使うの？

getServerSideProps を使用するうえで最低限知っておかなければいけないのは以下の 4 点である。

- getServerSideProps を使用したページへリクエストがある度に実行される
- getServerSideProps という決められた関数名でないと動かない
- pages の配下でしか使えない
- return で返却するものは props というオブジェクトに入れる
  ( props 以外にも [redirect](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#redirect) や [notFound](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#notfound) など返却できるオブジェクトはある )

基本的な書き方は以下の通り。

```tsx
export const getServerSideProps = async () => {
  const data = await getData() // APIやDBからのデータ取得処理など
  return {
    props: { data: data }, // 返却するものはpropsオブジェクトに入れておく
  }
}
```

これで data に取得したデータが正しく入っていれば、page コンポーネントが受け取る props から data にアクセスできる。ここまでシンプルに書かれたコードなら理解しやすいだろう。

さらに TypeScript で getServerSideProps を使用する場合は、前項で触れたジェネリクスを活用し、以下のようにして返却される props の型を指定できる。
こうすることで、page コンポーネントで受け取る props の型をより安全に管理できる。

```tsx
import { GetServerSideProps } from 'next'

// pageコンポーネントで受け取る propsの型を定義
type Props = {
  value: string
}

// nextが提供しているGetServerSidePropsという型はジェネリクスが使われているので型を上書きできる
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data = await getData() // APIやDBからのデータ取得処理など

  return {
    props: {
      value: data.value, // GetServerSideProps のジェネリクスで指定した型と渡されるpropsの型が一致する
    },
  }
}
```

もし余力があれば、getServerSideProps で引数として受けとって使うことのできる `context` についても覚えておこう。

```tsx
export const getServerSideProps = async (context) => {
  // context を利用した処理
}
```

上記で引数として受けとっている [context](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#context-parameter) には多くの情報が入っている。

params：そのページのルーティングに関するパラメータが入っているオブジェクト
req：リクエストデータが入っているオブジェクト
res：レスポンスデータが入っているオブジェクト
query：クエリパラメータが入っているオブジェクト
...（数が多いので以下略）

例えば、`http://localhost:3000/test?keyword=hoge` のような URL でアクセスした場合、以下の`pages/test/index.tsx` では getServerSideProps 内でクエリパラメータの文字列を取得して使うことができる。

```tsx
export const getServerSideProps = async (context) => {
  // クエリパラメータの文字列を取得
  const keyword = context.query.keyword

  return {
    props: { keyword: keyword }, // props.keyword で "hoge" にアクセスできる
  }
}
```

以上。

Qiita アドベントカレンダー 2022 にて寄稿した転載元の記事は[こちら](https://qiita.com/wlcmty/items/fcf5be68c830349fa122)

Tomoya Sonok
