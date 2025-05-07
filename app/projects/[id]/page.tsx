"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import NotFound from '@/app/not-found';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// プロジェクトデータ
// 本来はAPIやデータベースから取得するべきですが、デモのためにハードコードしています
const projects = [
  {
    id: "ec-platform",
    title: "ECサイトプラットフォーム",
    description: "Reactと.NET Coreを使用した高パフォーマンスなECサイトプラットフォーム。マイクロサービスアーキテクチャを採用し、スケーラブルなバックエンドAPIを設計・実装しました。ユーザー認証、商品管理、注文処理、支払いゲートウェイ連携など、包括的な機能を提供します。",
    longDescription: `
ECサイトプラットフォームは、オンラインショッピング体験を向上させるために設計されたフルスタック開発プロジェクトです。現代的なフロントエンド技術とスケーラブルなバックエンドを組み合わせることで、高いパフォーマンスと柔軟性を両立しています。

### 主要機能
- **マイクロサービスアーキテクチャ**: 個別のサービスに分割して独立したスケーリングと開発を実現
- **認証・認可システム**: JWTベースのトークン認証と細かなロールベースのアクセス制御
- **商品管理システム**: カテゴリ、タグ、バリエーション対応の柔軟な商品登録
- **高度な検索機能**: Elasticsearchを活用した全文検索と高速なフィルタリング
- **支払い処理**: Stripe APIとの連携による安全な支払い処理
- **注文管理**: 複雑な注文ワークフロー（確認、支払い、出荷、配達の追跡）
- **解析ダッシュボード**: 売上、アクセス数、コンバージョン率などのリアルタイム分析

### 技術的な挑戦と解決策
#### スケーラビリティの確保
- コンテナ化とオーケストレーションによる水平スケーリング
- キャッシュ戦略の最適化（Redis）によるパフォーマンス向上

#### セキュリティ対策
- OWASP Top 10への対応
- PCI DSS準拠のセキュリティ対策
- データ暗号化とプライバシー保護対策

#### CI/CD パイプライン
- GitLab CI/CDを活用した自動テストとデプロイ
- インフラストラクチャのコード化（IaC）によるデプロイメントの自動化

### 成果と学び
- トランザクション処理数30%向上
- ページ読み込み時間の40%削減
- モバイルセッションの継続時間20%増加
    `,
    techStack: ["React", "TypeScript", ".NET Core", "SQL Server", "Docker", "Azure", "Redis", "Stripe API"],
    challenges: [
      "大量のデータと高トラフィック時のパフォーマンス最適化",
      "マイクロサービス間の整合性の確保",
      "複雑な支払いフローの実装とエラー処理",
      "クロスブラウザ・クロスデバイスのUIの一貫性維持"
    ],
    outcomes: [
      "ユーザーのコンバージョン率が15%向上",
      "システム管理コストの削減",
      "ページロード時間の40%短縮",
      "新機能の導入サイクルを週単位に短縮"
    ],
    features: [
      {
        name: "商品管理システム",
        description: "在庫追跡、価格管理、画像アップロードを含む完全な商品管理機能",
        icon: "📦"
      },
      {
        name: "ユーザー認証・管理",
        description: "ソーシャルログイン対応、ロールベースのアクセス制御、セキュアなパスワード管理",
        icon: "🔐"
      },
      {
        name: "支払いゲートウェイ統合",
        description: "複数の支払い方法に対応し、安全な取引を実現するStripe API連携",
        icon: "💳"
      },
      {
        name: "注文・配送管理",
        description: "完全な注文ライフサイクル管理と配送追跡システム",
        icon: "🚚"
      },
      {
        name: "分析ダッシュボード",
        description: "売上、顧客行動、在庫状況などのリアルタイム分析",
        icon: "📊"
      },
      {
        name: "レスポンシブUI",
        description: "すべてのデバイスで最適な表示を実現するモダンなデザイン",
        icon: "📱"
      }
    ],
    images: [
      {
        url: "/ec-platform-dashboard.jpg",
        alt: "ECプラットフォーム管理ダッシュボード",
        caption: "管理者向けダッシュボードのインターフェース"
      },
      {
        url: "/ec-platform-catalog.jpg",
        alt: "商品カタログページ",
        caption: "レスポンシブな商品カタログビュー"
      },
      {
        url: "/ec-platform-checkout.jpg",
        alt: "チェックアウトプロセス",
        caption: "ユーザーフレンドリーな購入フロー"
      }
    ],
    links: [
      { type: "live", url: "https://example.com/ec-platform" },
      { type: "github", url: "https://github.com/yourusername/ec-platform" }
    ],
    testimonials: [
      {
        name: "田中 健太",
        position: "クライアント企業CTO",
        comment: "このECプラットフォームの導入によって、我々のオンライン販売プロセスは完全に変革されました。セールスサイクルが短縮され、顧客満足度も向上しています。"
      },
      {
        name: "鈴木 真理",
        position: "プロジェクトマネージャー",
        comment: "技術的な課題に対する創造的な解決策と、クライアントのニーズへの深い理解に感銘を受けました。期待以上の成果を出してくれました。"
      }
    ],
    featured: true,
    completionDate: "2024年3月",
    duration: "8ヶ月"
  },
  // 他のプロジェクトデータはここに追加
];

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // 実際のアプリではここでAPIからデータをフェッチします
    // ここでは簡単のためにハードコードされたデータを使用
    const foundProject = projects.find(p => p.id === params.id);
    setProject(foundProject || null);
    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヒーローセクション */}
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <FiArrowLeft className="mr-2" /> すべてのプロジェクトに戻る
          </Link>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900"
          >
            {project.title}
          </motion.h1>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech: string, index: number) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* プロジェクト画像ギャラリー */}
        <div className="mb-12 bg-white p-6 rounded-xl shadow-md">
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
            {project.images ? (
              <div className="relative h-full w-full">
                {/* 画像が存在する場合はここに表示 */}
                <div className="h-full w-full flex items-center justify-center text-4xl bg-gray-300">
                  🖼️ {project.images[activeImageIndex]?.caption || "プロジェクト画像"}
                </div>
              </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center text-4xl">
                🖼️ プロジェクト画像
              </div>
            )}
          </div>
          
          {/* サムネイルギャラリー */}
          {project.images && project.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {project.images.map((image: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 ${
                    index === activeImageIndex ? "border-blue-600" : "border-transparent"
                  }`}
                >
                  <div className="h-full w-full flex items-center justify-center bg-gray-200 text-sm">
                    🖼️
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* プロジェクト詳細 - メインコンテンツ */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">概要</h2>
              <div className="prose prose-blue max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />,
                    h4: ({node, ...props}) => <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />,
                    p: ({node, ...props}) => <p className="mb-4 text-gray-700" {...props} />,
                    ul: ({node, ...props}) => <ul className="mb-4 ml-6 list-disc" {...props} />,
                    li: ({node, ...props}) => <li className="mb-1 text-gray-700" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-semibold" {...props} />,
                    a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-800 underline" {...props} />,
                  }}
                >
                  {project.longDescription}
                </ReactMarkdown>
              </div>
            </div>

            {/* 機能一覧 */}
            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">主要機能</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 課題と成果 */}
            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">課題</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 mr-3 flex-shrink-0 mt-0.5">
                          !
                        </span>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">成果</h2>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-3 flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 顧客の声 */}
            {project.testimonials && project.testimonials.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">顧客の声</h2>
                <div className="space-y-6">
                  {project.testimonials.map((testimonial: any, index: number) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                      <p className="italic text-gray-700 mb-2">{testimonial.comment}</p>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* プロジェクト詳細 - サイドバー */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">プロジェクト情報</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">完了日</div>
                  <div className="font-medium">{project.completionDate}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">開発期間</div>
                  <div className="font-medium">{project.duration}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">技術スタック</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="text-sm text-gray-500 mb-2">プロジェクトリンク</div>
                  <div className="space-y-3">
                    {project.links.map((link: any) => (
                      <a
                        key={link.type}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        {link.type === "github" ? (
                          <>
                            <FiGithub className="mr-2" />
                            GitHubリポジトリ
                          </>
                        ) : (
                          <>
                            <FiExternalLink className="mr-2" />
                            ライブデモ
                          </>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    お問い合わせ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 他のプロジェクト */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">その他のプロジェクト</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects
              .filter((p: any) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject: any) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <span className="text-3xl">🖼️</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{relatedProject.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}