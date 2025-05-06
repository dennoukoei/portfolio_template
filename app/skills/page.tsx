"use client";

import { FiCode, FiServer, FiDatabase, FiMonitor, FiLayout, FiTrello, FiUsers, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, 
  Tooltip, Legend, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";

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

// カテゴリーごとの平均スキルレベルを計算
const categoryAverages = skillCategories.map(category => {
  const avgLevel = category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length;
  return {
    subject: category.name,
    value: avgLevel,
    fullMark: 100,
    icon: category.icon
  };
});

// スキル分野の比率データ（円グラフ用）
const skillDistribution = skillCategories.map(category => ({
  name: category.name,
  value: category.skills.length,
  color: getRandomColor(category.name)
}));

// トップスキル（レベルの高い順）
const topSkills = skillCategories
  .flatMap(category => category.skills.map(skill => ({...skill, category: category.name})))
  .sort((a, b) => b.level - a.level)
  .slice(0, 10);

// 色生成（カテゴリー名に基づいて一貫した色を生成）
function getRandomColor(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#a4de6c'];

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
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">スキルと専門分野</h1>
          <p className="mt-4 text-xl text-gray-600">
            フロントエンド、バックエンド、データベース、インフラなど幅広い分野に対応しています。
            常に最新技術のキャッチアップを行い、最適なソリューションを提供します。
          </p>
        </div>
        
        {/* スキルバランス（レーダーチャート） */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-white rounded-xl shadow-md p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">スキルバランス</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={categoryAverages}>
                <PolarGrid strokeOpacity={0.2} />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: 'currentColor', className: 'text-gray-600 text-sm' }}
                />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="スキルレベル"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                  animationDuration={1500}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    borderRadius: '6px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    border: 'none',
                    padding: '8px 12px',
                  }} 
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        {/* スキル分布（円グラフと棒グラフ） */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* スキル分野の比率（円グラフ） */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6 sm:p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">スキル分野の比率</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    animationDuration={1500}
                    animationBegin={300}
                  >
                    {skillDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name) => [`${value}項目`, name]}
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '6px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      border: 'none',
                      padding: '8px 12px',
                    }} 
                  />
                  <Legend layout="vertical" verticalAlign="middle" align="right" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          {/* トップスキル（棒グラフ） */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-md p-6 sm:p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">トップスキル</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={topSkills.slice(0, 5)}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.2} />
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: 'currentColor', className: 'text-gray-600' }} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fill: 'currentColor', className: 'text-gray-600', width: 100 }}
                    width={100}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, "スキルレベル"]}
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '6px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      border: 'none',
                      padding: '8px 12px',
                    }}
                  />
                  <Bar 
                    dataKey="level" 
                    fill="#3b82f6"
                    animationDuration={1500}
                    animationBegin={500}
                    barSize={20}
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* カテゴリーナビゲーション */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {skillCategories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-colors
                  ${activeCategory === category.name 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="inline-block">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
          
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="show"
            variants={container}
            key={activeCategory} // このキーが変わるとアニメーションが再生される
          >
            {skillCategories
              .filter(category => category.name === activeCategory)
              .map((category) => (
                <div key={category.name}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={item}
                        className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
                          <span className={`text-sm font-medium ${
                            hoveredSkill === skill.name ? 'text-blue-600' : 'text-gray-500'
                          }`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <motion.div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "0%" }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{skill.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-20 bg-blue-50 rounded-xl p-8 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">継続的な学習</h2>
            <p className="mt-4 text-gray-600">
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