"use client";

import { FiCode, FiServer, FiDatabase, FiMonitor, FiLayout, FiTrello, FiUsers, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";

// スキルデータ
const skillCategories = [
  {
    name: "フロントエンド開発",
    icon: <FiLayout className="w-6 h-6" />,
    skills: [
      { name: "React", level: 90, description: "コンポーネント設計、Hooks、状態管理、パフォーマンス最適化" },
      { name: "Next.js", level: 85, description: "SSR/SSG, API Routes, Middleware, App Router" },
      { name: "TypeScript", level: 90, description: "高度な型定義、ジェネリクス、型安全性の確保" },
      { name: "HTML/CSS", level: 95, description: "セマンティックHTML、アクセシビリティ、レスポンシブデザイン" },
      { name: "Tailwind CSS", level: 90, description: "効率的なスタイリング、カスタム設定、コンポーネントデザイン" },
      { name: "Vue.js", level: 75, description: "コンポーネント開発、Vuex、Vue Router" },
      { name: "Angular", level: 65, description: "基本的なコンポーネント開発、サービス、モジュール" },
    ]
  },
  {
    name: "バックエンド開発",
    icon: <FiServer className="w-6 h-6" />,
    skills: [
      { name: "Node.js", level: 85, description: "RESTful APIの構築、非同期処理、ストリーム処理" },
      { name: "Express.js", level: 90, description: "ミドルウェア設計、ルーティング、エラーハンドリング" },
      { name: ".NET Core", level: 80, description: "Web API開発、依存性注入、Entity Framework" },
      { name: "GraphQL", level: 75, description: "スキーマ設計、リゾルバー実装、クエリ最適化" },
      { name: "Java", level: 70, description: "Springフレームワーク、マイクロサービス構築" },
      { name: "Python", level: 75, description: "Django/Flask、データ処理、自動化スクリプト" },
    ]
  },
  {
    name: "データベース",
    icon: <FiDatabase className="w-6 h-6" />,
    skills: [
      { name: "PostgreSQL", level: 85, description: "スキーマ設計、パフォーマンス・チューニング、トランザクション管理" },
      { name: "MongoDB", level: 90, description: "ドキュメント設計、インデックス最適化、アグリゲーション" },
      { name: "SQL Server", level: 75, description: "ストアドプロシージャ、トリガー、高度なクエリ" },
      { name: "Redis", level: 80, description: "キャッシング、パブサブモデル、データ構造の最適化" },
      { name: "Firestore", level: 70, description: "NoSQLデータモデリング、セキュリティルール、リアルタイム更新" },
    ]
  },
  {
    name: "DevOps & インフラ",
    icon: <FiMonitor className="w-6 h-6" />,
    skills: [
      { name: "Docker", level: 85, description: "コンテナ化、マルチステージビルド、ネットワーキング" },
      { name: "Kubernetes", level: 70, description: "クラスター管理、デプロイメント戦略、スケーリング" },
      { name: "AWS", level: 80, description: "EC2, S3, Lambda, ECS, CloudFormation" },
      { name: "Azure", level: 75, description: "App Service, Azure Functions, Cosmos DB, CI/CD" },
      { name: "CI/CD", level: 85, description: "GitHub Actions, GitLab CI, Jenkins、自動テスト・デプロイ" },
      { name: "Terraform", level: 65, description: "インフラストラクチャ・アズ・コード、リソース管理" },
    ]
  },
  {
    name: "UI/UX設計",
    icon: <FiTrello className="w-6 h-6" />,
    skills: [
      { name: "Figma", level: 75, description: "デザインシステム、プロトタイピング、コンポーネント設計" },
      { name: "レスポンシブデザイン", level: 90, description: "マルチデバイス対応UI、フレキシブルレイアウト" },
      { name: "アクセシビリティ", level: 85, description: "WCAG準拠、キーボード操作、スクリーンリーダー対応" },
      { name: "アニメーション", level: 80, description: "インタラクション設計、パフォーマンス最適化" },
    ]
  },
  {
    name: "プロジェクト管理",
    icon: <FiUsers className="w-6 h-6" />,
    skills: [
      { name: "アジャイル/Scrum", level: 90, description: "スプリント計画、バックログ管理、レトロスペクティブ" },
      { name: "Git", level: 95, description: "ブランチ戦略、マージ管理、コードレビュー" },
      { name: "Jira", level: 85, description: "チケット管理、ワークフロー設計、レポーティング" },
      { name: "コードレビュー", level: 90, description: "品質保証、ベストプラクティス、チーム内知識共有" },
    ]
  },
  {
    name: "パフォーマンス最適化",
    icon: <FiTrendingUp className="w-6 h-6" />,
    skills: [
      { name: "Webパフォーマンス", level: 85, description: "バンドル最適化、レンダリング効率化、キャッシング戦略" },
      { name: "SEO", level: 75, description: "メタデータ最適化、構造化データ、パフォーマンス指標" },
      { name: "APIパフォーマンス", level: 90, description: "クエリ最適化、N+1問題の解決、キャッシュ戦略" },
      { name: "負荷テスト", level: 80, description: "ボトルネック特定、スケーリング戦略、リソース最適化" },
    ]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function SkillsPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">スキルと専門分野</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            フロントエンド、バックエンド、データベース、インフラなど幅広い分野に対応しています。
            常に最新技術のキャッチアップを行い、最適なソリューションを提供します。
          </p>
        </div>

        <motion.div 
          className="mt-16 space-y-20"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.name}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8"
            >
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.name}</h2>
              </div>
              
              <div className="mt-8 space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                        style={{ width: "0%" }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">継続的な学習</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              技術の世界は常に進化しています。新しい言語、フレームワーク、ベストプラクティスを学び続け、
              最先端の技術を取り入れることで、より良いソリューションを提供します。
              現在特に注力している分野は、AI技術の実用的な活用、マイクロフロントエンド、分散システムの設計です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}