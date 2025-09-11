# 🌐 U15-Ichinoseki-Web

U-15 プログラミングコンテスト 一関大会の公式ウェブサイト用リポジトリです。
大会情報の発信や、参加者への案内を目的とした静的サイトを管理しています。

## サイト概要

このサイトでは、以下の情報を掲載しています：

- 大会の概要、競技部門、大会ルール
- トピックス（お知らせ）データ：`topics.json` にて管理
- お問い合わせ先や運営情報

使用技術：

- HTML / CSS / JavaScript
- [Tailwind CSS](https://tailwindcss.com/) によるスタイリング
- [Vite](https://vitejs.dev/) による開発環境とビルドツール

## トピックスデータの変更方法

トピックス（お知らせ）データは `public/topics.json` に記述されています。
内容を変更したい場合は、該当の JSON ファイルを直接編集してください。


## セットアップ手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/U15-Ichinoseki/U15-Ichinoseki-Web.git
cd U15-Ichinoseki-Web
```

### 2. パッケージをインストール（Node.js が必要です）

```bash
npm install
```

## ローカルプレビュー（編集中）

以下のコマンドで、編集中の状態をリアルタイムで確認できます：

```bash
npm run dev
```

- ブラウザで `http://localhost:5173/` を開くと、変更が即座に反映されます。
- 開発作業中の確認に最適です。

## ビルド

Tailwind CSS を含む全体のビルドを行うには、以下を実行します：

```bash
npm run build
```

- `dist/` ディレクトリに公開用ファイルが生成されます。

## ローカルプレビュー（最終確認）

ビルド済みの公開用ファイルを本番と同じ状態で確認するには：

```bash
npm run preview
```

- `dist/` ディレクトリの公開用ファイルをローカルサーバーで表示します。
- ブラウザで `http://localhost:4173/` を開くと、表示できます。
- デプロイ前の最終確認におすすめです。

## デプロイ方法

- `npm run build` 実行後、`dist/` 内のファイル（HTML, CSS, 画像など）を Web サーバーにアップロードしてください。

## ディレクトリ構成（抜粋）

```
├── index.html
├── competition.html
├── src/
│   ├── style.css
│   ├── topics.js
│   └── ...
├── public/
│   ├── index.js
│   ├── topics.json # トピックス（お知らせ）データ
│   ├── images/
│   │   ├── favicon.ico
│   │   ├── ...
│   │   ├── CHaser/  # 解説用スライド
│   │   │   ├── スライド1.PNG
```

## ライセンス・利用規約

本リポジトリの内容は、U-15 プログラミングコンテスト 一関大会 実行委員会の許可なく転載・再利用することはできません。利用をご希望の場合は、事前にご連絡ください。
