# Plurality Tokyo Website

Plurality Tokyo のウェブサイトプロジェクトです。Next.js 14 を使用して構築されています。

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## プロジェクト構造

```
.
├── app/              # Next.jsのアプリケーションコード
├── components/       # 再利用可能なコンポーネント
├── content/         # マークダウンコンテンツ
│   ├── articles/    # 記事のマークダウンファイル
│   └── events/      # Eventsのマークダウンファイル
├── lib/             # ユーティリティ関数
└── public/          # 静的ファイル
    └── images/      # 画像ファイル
```

## Events の追加方法

1. `content/events/` ディレクトリに新しいマークダウンファイルを作成
2. 以下のフロントマターを含める：

```markdown
---
title: Eventsタイトル
description: Eventsの説明
date: YYYY-MM-DD
coverImage: /images/events/[event-name]/cover.jpg
---

Events の本文をここに記述...
```

3. Events の画像を `public/images/events/[event-name]/` に配置

## 必要なパッケージ

- next-themes: ダークモードサポート
- react-markdown: マークダウンレンダリング
- gray-matter: マークダウンのフロントマター解析

## 注意事項

- Events 画像が見つからない場合は、デフォルトのプレースホルダー画像が使用されます
- 本番環境にデプロイする前に、必ず実際の画像ファイルを配置してください

## 技術スタック

- Next.js 14
- TypeScript
- Tailwind CSS（プリフライトやリンク装飾のカスタマイズあり。詳細は `app/globals.css` および `tailwind.config.ts` を参照）
- shadcn/ui
- マークダウン（MDX）コンテンツ

## セットアップ

1. リポジトリのクローン

```bash
git clone https://github.com/your-username/plurality-tokyo.git
cd plurality-tokyo
```

2. 依存関係のインストール

```bash
pnpm install
```

3. 環境変数の設定
   `.env.local`ファイルを作成し、必要な環境変数を設定します（詳細は`.env.example`を参照）

4. 開発サーバーの起動

```bash
pnpm dev
```

## コンテンツ更新方法

このサイトはマークダウン（MDX）ベースのコンテンツ管理システムを採用しています。コンテンツの更新は以下のディレクトリのマークダウンファイルを編集するだけで反映されます：

- `/content/blog`: ブログ記事
- `/content/events`: Events 情報
- `/content/authors`: 著者プロフィール

マークダウンファイルを編集して GitHub にプッシュするだけで、自動的にサイトに反映されます。

### マークダウンファイルの構造

マークダウンファイルは以下の構造になっています：

```md
---
title: 記事タイトル
date: 2023-01-01
excerpt: 記事の要約
tags: [tag1, tag2]
author: 著者名
coverImage: /images/articles/記事画像ファイル名.png
---

ここに本文を書きます。マークダウン形式で記述できます。
```

## SEO 設定

- メタデータは`lib/metadata.ts`で管理
  - 多言語対応（日本語・英語）のメタデータを提供
  - `getMetadata(locale)` 関数で現在のロケールに基づいたメタデータを生成
- OpenGraph 設定を含む（ロケールに応じて自動的に調整）
- JSON-LD 構造化データを実装（`lib/schema.ts`）
  - Organization, Event, Article, BreadcrumbList スキーマをサポート
  - 検索エンジンの理解度向上のための構造化データ
- サイトマップは自動生成（`public/sitemap.xml`）
  - 多言語対応のhreflang属性を含む
- robots.txt ファイルを提供（`public/robots.txt`）

### SEO Configuration

- Metadata is managed in `lib/metadata.ts`
  - Provides multilingual metadata (Japanese and English)
  - `getMetadata(locale)` function generates metadata based on current locale
- Includes OpenGraph settings (automatically adjusted based on locale)
- JSON-LD structured data implemented (`lib/schema.ts`)
  - Supports Organization, Event, Article, and BreadcrumbList schemas
  - Structured data for better search engine understanding
- Sitemap is automatically generated (`public/sitemap.xml`)
  - Includes hreflang attributes for multilingual support
- Provides robots.txt file (`public/robots.txt`)

## 開発ルール

### ブランチ戦略

- `main`: 本番環境用
- `develop`: 開発環境用
- `feature/*`: 新機能開発用
- `hotfix/*`: 緊急バグ修正用

### コミットメッセージ

- feat: 新機能
- fix: バグ修正
- docs: ドキュメント
- style: フォーマット
- refactor: リファクタリング
- test: テスト
- chore: ビルドプロセスやツールの変更

### コードスタイル

- ESLint と Prettier を使用
- TypeScript の厳格な型チェックを有効化
- コンポーネントは Atomic Design に基づいて構成

## デプロイ

Vercel を使用して自動デプロイを設定しています。

## ライセンス

MIT License

## コンテンツの追加方法

### ブログ記事の追加

1. `/content/blog` ディレクトリに新しいマークダウンファイルを作成します。
2. ファイル名は `YYYY-MM-DD-title.md` の形式で作成します。
3. 以下のフロントマターを追加します：

```markdown
---
title: 記事タイトル
date: YYYY-MM-DD
excerpt: 記事の要約
tags: [tag1, tag2]
author: 著者名
---

ここに本文を書きます。
```

### Events 情報の追加

1. `/content/events` ディレクトリに新しいマークダウンファイルを作成します。
2. ファイル名は `YYYY-MM-DD-event-title.md` の形式で作成します。
3. 以下のフロントマターを追加します：

```markdown
---
title: Eventsタイトル
date: YYYY-MM-DD
time: HH:MM
location: 開催場所
excerpt: Eventsの要約
tags: [tag1, tag2]
organizer: 主催者名
---

ここに Events の詳細を書きます。
```

### 著者プロフィールの追加

1. `/content/authors` ディレクトリに新しいマークダウンファイルを作成します。
2. ファイル名は `author-name.md` の形式で作成します。
3. 以下のフロントマターを追加します：

```markdown
---
name: 著者名
role: 役職
bio: 簡単な自己紹介
social:
  twitter: Twitterのユーザー名
  github: GitHubのユーザー名
  website: 個人サイトのURL
---

ここに詳細なプロフィールを書きます。
```

### 画像の追加

1. 画像は `/public/images` ディレクトリに保存します。
2. ブログ記事や Events 情報で画像を使用する場合は、以下のように記述します：

```markdown
![画像の説明](/images/filename.jpg)
```

3. 記事画像は `/public/images/articles/` に保存し、ファイル名は記事のスラッグやタイトルに合わせて命名してください（例: `CryptoBridgeFtC.png`）。
4. スピーカー画像は `/public/images/speakers/` に保存し、ファイル名はスピーカー名（英語表記、ハイフン区切り）で命名してください（例: `shinya-mori.png`）。

### コンテンツのプレビュー

1. 開発サーバーを起動します：

```bash
pnpm dev
```

2. ブラウザで `http://localhost:3000` にアクセスして、変更を確認します。

### コンテンツの公開

1. 変更をコミットしてプッシュします：

```bash
git add .
git commit -m "feat: 新しいコンテンツを追加"
git push
```

2. Vercel が自動的にデプロイを行い、変更が反映されます。

## コントリビューション

このプロジェクトに貢献する方法については、[コントリビューションガイド](CONTRIBUTING.md)を参照してください。

## LLMs.txt Support

このプロジェクトは[llms.txt 仕様](https://llmstxt.org/)に対応しています。
llms.txt は、LLM（大規模言語モデル）がウェブサイトの情報を効率的に理解できるようにするための標準です。

### 機能

- `/llms.txt` - サイトのコンテンツ構造やリソースを説明するマークダウンファイル
- `.html.md` 拡張子 - 各ページのマークダウンバージョンを提供（例: `/events/event-name.html.md`）

### 仕組み

ビルド時に、次の処理が行われます：

1. サイト内の全コンテンツ（Events、記事、スピーカー情報など）を解析
2. llms.txt 仕様に従ったマークダウンファイルを生成
3. 各コンテンツページのマークダウンバージョンを生成

これにより、LLM はサイトの構造と内容を理解しやすくなり、より適切な応答を提供できるようになります。

### 手動生成

llms.txt を手動で生成するには、以下のコマンドを実行します：

```bash
npm run generate-llms
```
