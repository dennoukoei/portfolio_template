# ポートフォリオサイト テンプレート

![ポートフォリオサイト](https://img.shields.io/badge/Portfolio-Template-3178C6?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

フルスタックエンジニアとしてのスキルと実績を効果的に紹介できるモダンなポートフォリオサイトのテンプレートです。Next.js、TypeScript、TailwindCSSを使用した洗練されたデザインと使いやすいインターフェースを提供します。

## 📋 特徴

- **レスポンシブデザイン**: あらゆるデバイスで最適な表示を実現
- **モダンなUI/UX**: TailwindCSSによる洗練されたデザイン
- **パフォーマンス最適化**: Next.jsのSSG/SSRによる高速なページ読み込み
- **TypeScript対応**: 型安全性の確保によるバグの軽減
- **SEOフレンドリー**: メタタグ最適化と構造化データの対応
- **カスタマイズ容易**: 個人のブランドに合わせて簡単にカスタマイズ可能
- **アニメーションと視覚効果**: Framer Motionによる滑らかなアニメーション

## 🧩 構成セクション

- **ホーム**: プロフィール概要と主要なスキルの紹介
- **スキル**: 技術スタックやスキルレベルの視覚的な表現（グラフ/チャート）
- **プロジェクト**: 過去の実績やポートフォリオ作品の紹介
- **自己紹介**: 経歴と人柄を伝える自己紹介
- **コンタクト**: お問い合わせフォームとソーシャルリンク

## 🚀 始め方

### 前提条件

- Node.js (v18.17.0以上)
- npm, Yarn, pnm, または Bun

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/portfolio_template.git

# プロジェクトディレクトリに移動
cd portfolio_template

# 依存パッケージをインストール
npm install
# または
yarn install
# または
pnpm install
# または
bun install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスして結果を確認できます。

## ⚙️ カスタマイズ

1. `app/page.tsx` - ホームページの内容を編集
2. `app/skills/page.tsx` - スキルセクションをあなたのスキルセットに合わせて調整
3. `app/projects/page.tsx` - あなたのプロジェクトや実績を追加
4. `app/about/page.tsx` - 自己紹介を個人の経歴に合わせて更新
5. `app/contact/page.tsx` - コンタクト情報を設定

各ページのスタイルはTailwindCSSを使用してインラインで編集できます。

## 📦 使用技術

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全なJavaScript
- [TailwindCSS](https://tailwindcss.com/) - ユーティリティファーストのCSSフレームワーク
- [Framer Motion](https://www.framer.com/motion/) - アニメーションライブラリ
- [React Icons](https://react-icons.github.io/react-icons/) - アイコンライブラリ
- [Recharts](https://recharts.org/) - データ可視化コンポーネント

## 🌐 デプロイ

Next.jsアプリケーションをデプロイする最も簡単な方法は、Next.jsの作成者が提供する[Vercelプラットフォーム](https://vercel.com/new)を使用することです。

```bash
# Vercel CLIをインストール
npm install -g vercel

# デプロイ
vercel
```

その他のデプロイ方法については、[Next.jsのデプロイドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)を参照してください。

## 💡 ヒント

- 実際のプロジェクト画像や専門分野に関連するアイコンを追加して、視覚的な魅力を高めましょう
- 自分の強みやユニークなスキルを強調するようにコンテンツをカスタマイズしましょう
- OGP設定を適切に行い、ソーシャルメディアでの共有時の表示を最適化しましょう
- Google Analyticsの設定を行い、ポートフォリオサイトのアクセス解析を行いましょう

## 📄 ライセンス

MIT

---

🔧 作成・カスタマイズに関するご質問やサポートが必要な場合は、お気軽にお問い合わせください。あなたのキャリアをサポートするポートフォリオサイトの構築をお手伝いします！
