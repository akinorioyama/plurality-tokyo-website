# Plurality Tokyo Website Content Guidelines

このガイドラインは、Plurality Tokyoウェブサイトのコンテンツ作成と投稿に関するルールと推奨事項を定めています。すべてのコントリビューターはこのガイドラインに従ってください。

## 目次

1. [一般的なガイドライン](#一般的なガイドライン)
2. [イベントコンテンツ](#イベントコンテンツ)
3. [記事コンテンツ](#記事コンテンツ)
4. [著者プロフィール](#著者プロフィール)
5. [画像ガイドライン](#画像ガイドライン)
6. [多言語コンテンツ](#多言語コンテンツ)

## 一般的なガイドライン

### フォーマット
- すべてのコンテンツはMarkdownまたはMDX形式で作成してください
- ファイル名は英数字とハイフンのみを使用し、スペースは使用しないでください
- ファイル名は内容を適切に表すものにしてください
- すべてのファイルはUTF-8エンコーディングで保存してください

### メタデータ
- すべてのコンテンツファイルはFront Matterセクションを含める必要があります
- Front Matterは`---`で囲み、YAMLフォーマットで記述してください
- 必須フィールドはコンテンツタイプによって異なります（下記参照）

### 言語
- 日本語と英語の両方のコンテンツを提供することを推奨します
- 言語固有のコンテンツは適切なディレクトリに配置してください
- 翻訳は原文の意味を正確に伝えるようにしてください

### リンクと参照
- 内部リンクは相対パスを使用してください
- 外部リンクは完全なURLを使用してください
- すべてのリンクが有効であることを確認してください

## イベントコンテンツ

イベントコンテンツは`content/events/`ディレクトリに配置します。

### 必須フィールド
```yaml
---
title: "イベントタイトル"
date: "YYYY-MM-DD"
description: "イベントの簡潔な説明"
location: "開催場所"
---
```

### 推奨フィールド
```yaml
---
speakers: ["話者1", "話者2"]
tags: ["タグ1", "タグ2"]
coverImage: "/images/events/イベント画像.jpg"
youtubeUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
isUpcoming: true/false
---
```

### コンテンツ構造
1. イベントの概要
2. 詳細な説明
3. スピーカー情報
4. スケジュール
5. 参加方法
6. 関連リソース

## 記事コンテンツ

記事コンテンツは`content/articles/`ディレクトリに配置します。

### 必須フィールド
```yaml
---
title: "記事タイトル"
date: "YYYY-MM-DD"
description: "記事の簡潔な説明"
author: "著者のスラッグ"
---
```

### 推奨フィールド
```yaml
---
tags: ["タグ1", "タグ2"]
coverImage: "/images/articles/記事画像.jpg"
---
```

### コンテンツ構造
1. 導入部
2. 本文（適切な見出しを使用）
3. 結論
4. 参考文献（該当する場合）

## 著者プロフィール

著者プロフィールは`content/authors/`ディレクトリに配置します。

### 必須フィールド
```yaml
---
name: "著者名"
bio: "著者の簡潔な経歴"
avatar: "/images/authors/著者画像.jpg"
---
```

### 推奨フィールド
```yaml
---
website: "https://example.com"
twitter: "twitterハンドル"
github: "githubユーザー名"
linkedin: "linkedinプロフィールURL"
---
```

## 画像ガイドライン

### 画像形式
- イベントカバー画像: 1200 x 630px, JPG/PNG形式
- 記事カバー画像: 1200 x 630px, JPG/PNG形式
- 著者アバター: 400 x 400px, JPG/PNG形式
- ソーシャルメディア共有用画像: 1200 x 630px, JPG/PNG形式

### 画像の最適化
- すべての画像は適切に最適化し、ファイルサイズを小さくしてください
- 画像には適切なalt属性を提供してください
- 画像ファイル名は内容を表す英数字とハイフンを使用してください

## 多言語コンテンツ

### 言語ファイルの命名
- 英語コンテンツ: `filename.md`
- 日本語コンテンツ: `filename.ja.md`

### 翻訳の一貫性
- 専門用語の翻訳は一貫性を保ってください
- 文化的な文脈を考慮して適切に翻訳してください
- 可能な限り、両方の言語でコンテンツを提供してください

---

このガイドラインは、Plurality Tokyoウェブサイトのコンテンツ品質と一貫性を確保するために作成されました。質問や提案がある場合は、プロジェクトメンテナーにお問い合わせください。
