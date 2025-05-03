import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCode, FiServer, FiDatabase, FiMonitor } from "react-icons/fi";

// プロジェクトのサンプルデータ
const featuredProjects = [
  {
    id: 1,
    title: "ECサイトプラットフォーム",
    description: "Reactと.NET Coreを使用した高パフォーマンスなECサイトプラットフォーム。マイクロサービスアーキテクチャとAPI設計を実装。",
    tags: ["React", "TypeScript", ".NET Core", "SQL Server", "Docker"],
    image: "/ec-platform.jpg",
    link: "/projects/ec-platform"
  },
  {
    id: 2,
    title: "AIチャットアプリケーション",
    description: "Next.jsとOpenAI APIを活用した、リアルタイムAIチャットアプリケーション。ユーザーの入力に対して自然言語で応答。",
    tags: ["Next.js", "OpenAI", "WebSockets", "Tailwind CSS", "Vercel"],
    image: "/chat-app.jpg",
    link: "/projects/ai-chat"
  },
  {
    id: 3,
    title: "分析ダッシュボード",
    description: "データ可視化と分析のためのインタラクティブなダッシュボード。複雑なデータを直感的なチャートとグラフで表示。",
    tags: ["Vue.js", "D3.js", "GraphQL", "Node.js", "Firebase"],
    image: "/analytics-dashboard.jpg",
    link: "/projects/analytics-dashboard"
  },
];

// スキルのサンプルデータ
const skills = [
  {
    icon: <FiCode />,
    name: "フロントエンド",
    description: "モダンなUIの設計・実装",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: <FiServer />,
    name: "バックエンド",
    description: "スケーラブルなサーバーサイド開発",
    technologies: ["Node.js", ".NET Core", "Express", "GraphQL"]
  },
  {
    icon: <FiDatabase />,
    name: "データベース",
    description: "効率的なデータモデリングと操作",
    technologies: ["PostgreSQL", "MongoDB", "SQL Server", "Redis"]
  },
  {
    icon: <FiMonitor />,
    name: "DevOps",
    description: "自動化とインフラ管理",
    technologies: ["Docker", "Kubernetes", "AWS/Azure", "CI/CD"]
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                <span className="block">こんにちは！</span>
                <span className="block text-blue-600 dark:text-blue-400">
                  unknown<span className="text-3xl font-normal">です</span>
                </span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
                フルスタックエンジニアとして、モダンなWebアプリケーション開発に情熱を持って取り組んでいます。
                フロントエンドからバックエンド、インフラまで、ユーザー体験を向上させる技術的ソリューションを設計・実装します。
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link 
                  href="/projects"
                  className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition"
                >
                  プロジェクトを見る
                </Link>
                <Link 
                  href="/contact"
                  className="flex items-center text-base font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  お問い合わせ <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden p-8 w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center transform rotate-3 hover:rotate-0 transition duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">unknown</p>
                  <p className="text-gray-600 dark:text-gray-300">フルスタックエンジニア</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">スキルと専門分野</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              多岐にわたる技術スタックと経験を活かし、あらゆる規模のプロジェクトに対応します。
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{skill.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 厳選プロジェクト */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">厳選プロジェクト</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              これまでに手がけたプロジェクトの中から、特に技術的チャレンジと成果を示す事例をご紹介します。
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl">🖼️</span> {/* 画像プレースホルダー */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      詳細を見る <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-blue-600 dark:border-blue-500 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition"
            >
              すべてのプロジェクトを見る <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 sm:py-24 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">一緒に素晴らしいプロジェクトを作りませんか？</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
            新しいプロジェクトの相談、お仕事のご依頼、技術的な質問など、お気軽にお問い合わせください。
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 shadow-sm transition"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
