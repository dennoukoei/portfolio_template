import Link from "next/link";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";

export const metadata = {
  title: "プロジェクト | unknown",
  description: "unknownのポートフォリオプロジェクト一覧 - フルスタックエンジニアとして手がけた様々な開発事例",
};

// プロジェクトデータ
const projects = [
  {
    id: "ec-platform",
    title: "ECサイトプラットフォーム",
    description: "Reactと.NET Coreを使用した高パフォーマンスなECサイトプラットフォーム。マイクロサービスアーキテクチャを採用し、スケーラブルなバックエンドAPIを設計・実装しました。ユーザー認証、商品管理、注文処理、支払いゲートウェイ連携など、包括的な機能を提供します。",
    techStack: ["React", "TypeScript", ".NET Core", "SQL Server", "Docker", "Azure", "Redis", "Stripe API"],
    image: "/ec-platform.jpg",
    links: [
      { type: "live", url: "https://example.com/ec-platform" },
      { type: "github", url: "https://github.com/yourusername/ec-platform" }
    ],
    featured: true
  },
  {
    id: "ai-chat",
    title: "AIチャットアプリケーション",
    description: "Next.jsとOpenAI APIを活用した、リアルタイムAIチャットアプリケーション。WebSocketを使用してリアルタイム通信を実装し、ユーザーの入力に対して自然言語で応答するインターフェースを構築しました。会話履歴の管理、コンテキスト維持のためのプロンプトエンジニアリングなど、高度な機能を搭載しています。",
    techStack: ["Next.js", "OpenAI API", "WebSockets", "Tailwind CSS", "Vercel", "MongoDB", "Auth0"],
    image: "/chat-app.jpg",
    links: [
      { type: "live", url: "https://example.com/ai-chat" },
      { type: "github", url: "https://github.com/yourusername/ai-chat" }
    ],
    featured: true
  },
  {
    id: "analytics-dashboard",
    title: "分析ダッシュボード",
    description: "データ可視化と分析のためのインタラクティブなダッシュボード。Vue.jsとD3.jsを使用して、複雑なデータを直感的なチャートとグラフで表示します。GraphQLを使ったデータ取得の効率化、ドラッグ&ドロップによるダッシュボードカスタマイズ、データエクスポート機能などを実装しました。",
    techStack: ["Vue.js", "D3.js", "GraphQL", "Node.js", "Firebase", "Firestore", "TypeScript"],
    image: "/analytics-dashboard.jpg",
    links: [
      { type: "live", url: "https://example.com/analytics-dashboard" },
      { type: "github", url: "https://github.com/yourusername/analytics-dashboard" }
    ],
    featured: true
  },
  {
    id: "fitness-app",
    title: "フィットネスアプリ",
    description: "Reactネイティブで開発したクロスプラットフォーム向けフィットネスアプリ。ワークアウトの記録、進捗管理、カスタムトレーニングプランの作成機能を提供します。ヘルスキットとの連携、オフラインモード対応などのモバイル特有の機能も実装しました。",
    techStack: ["React Native", "Expo", "Redux", "Node.js", "MongoDB", "AWS", "HealthKit/Google Fit APIs"],
    image: "/fitness-app.jpg",
    links: [
      { type: "live", url: "https://example.com/fitness-app" },
      { type: "github", url: "https://github.com/yourusername/fitness-app" }
    ]
  },
  {
    id: "task-management",
    title: "タスク管理ツール",
    description: "チーム向けのタスク管理ツール。ドラッグ&ドロップのカンバンボード、スプリント計画、バーンダウンチャートなどのアジャイル開発をサポートする機能を実装。WebSocketを使用したリアルタイム更新とコラボレーション機能も搭載しています。",
    techStack: ["Angular", "RxJS", "Express", "PostgreSQL", "Socket.io", "Docker", "GitLab CI/CD"],
    image: "/task-management.jpg",
    links: [
      { type: "live", url: "https://example.com/task-management" },
      { type: "github", url: "https://github.com/yourusername/task-management" }
    ]
  },
  {
    id: "iot-dashboard",
    title: "IoTモニタリングシステム",
    description: "工場の機器や環境センサーからのデータを収集・可視化するIoTモニタリングシステム。MQTT通信プロトコルを使用したデータ収集、異常検知アラート、時系列データベースを活用したパフォーマンス分析などを実装しました。",
    techStack: ["React", "Node.js", "MQTT", "InfluxDB", "Grafana", "Docker", "Kubernetes", "Raspberry Pi"],
    image: "/iot-dashboard.jpg",
    links: [
      { type: "github", url: "https://github.com/yourusername/iot-dashboard" }
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">プロジェクト</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            これまでに手がけたプロジェクトの一部をご紹介します。各プロジェクトでは、現代的な技術スタックと設計原則を適用し、最適なユーザー体験の提供を目指しました。
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">厳選プロジェクト</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.featured).map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl">🖼️</span> {/* 画像プレースホルダー */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        + {project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* リンク */}
                  <div className="mt-6 flex items-center space-x-4">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      詳細を見る <FiArrowRight className="ml-2" />
                    </Link>
                    
                    <div className="flex-1"></div>
                    
                    {project.links.map((link) => (
                      link.type === "github" ? (
                        <a
                          key={link.type}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          aria-label="GitHub"
                        >
                          <FiGithub size={20} />
                        </a>
                      ) : (
                        <a
                          key={link.type}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">その他のプロジェクト</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => !p.featured).map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl">🖼️</span> {/* 画像プレースホルダー */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        + {project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* リンク */}
                  <div className="mt-6 flex items-center space-x-4">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      詳細を見る <FiArrowRight className="ml-2" />
                    </Link>
                    
                    <div className="flex-1"></div>
                    
                    {project.links.map((link) => (
                      link.type === "github" ? (
                        <a
                          key={link.type}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          aria-label="GitHub"
                        >
                          <FiGithub size={20} />
                        </a>
                      ) : (
                        <a
                          key={link.type}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}