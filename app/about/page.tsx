import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export const metadata = {
  title: "経歴 | unknown",
  description: "unknownの経歴 - 学歴、職歴、得意分野、技術スタック",
};

// 経歴データ
const workExperiences = [
  {
    period: "2023年4月 - 現在",
    company: "テックイノベーション株式会社",
    position: "シニアフルスタックエンジニア",
    description:
      "大規模ECサイトのリアーキテクチャと開発リード。マイクロサービスアーキテクチャへの移行を主導し、ユーザー体験と開発効率を大幅に改善。Next.jsとTypeScriptを用いたフロントエンド刷新、.NET CoreとGraphQLによるバックエンド開発を担当。",
    technologies: ["Next.js", "TypeScript", ".NET Core", "GraphQL", "Azure", "Docker", "Kubernetes"],
  },
  {
    period: "2020年7月 - 2023年3月",
    company: "フューチャーウェブ株式会社",
    position: "リードフロントエンドエンジニア",
    description:
      "複数のWebアプリケーション開発プロジェクトをリード。React、Vue.js、Angular等のフレームワークを用いた高品質なUIの設計・実装を担当。パフォーマンス最適化、アクセシビリティ対応にも注力し、ユーザー満足度向上に貢献。",
    technologies: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Node.js", "AWS"],
  },
  {
    period: "2017年4月 - 2020年6月",
    company: "グローバルソフト株式会社",
    position: "ウェブ開発者",
    description:
      "企業向けWebアプリケーションの設計・開発を担当。JavaとSpring Frameworkを用いたバックエンド開発、jQuery/JavaScriptを用いたフロントエンド開発を行う。CI/CDパイプラインの構築やテスト自動化も推進。",
    technologies: ["Java", "Spring", "JavaScript", "jQuery", "MySQL", "Jenkins", "Git"],
  },
];

const education = [
  {
    period: "2015年4月 - 2017年3月",
    institution: "東京工科大学大学院",
    degree: "情報工学 修士",
    description:
      "人工知能とデータ分析に関する研究を行い、効率的なアルゴリズムの開発と評価に取り組む。修士論文「機械学習を用いた大規模データセットからのパターン検出手法」を執筆。",
  },
  {
    period: "2011年4月 - 2015年3月",
    institution: "東京工科大学",
    degree: "コンピュータサイエンス 学士",
    description:
      "プログラミング、データ構造、アルゴリズム、ソフトウェア工学を学ぶ。卒業プロジェクトでは、クラウドベースの共同編集アプリケーションを開発。",
  },
];

const certifications = [
  {
    name: "AWS 認定ソリューションアーキテクト - プロフェッショナル",
    issuer: "Amazon Web Services",
    year: "2022",
  },
  {
    name: "Microsoft 認定 Azure デベロッパー アソシエイト",
    issuer: "Microsoft",
    year: "2021",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    year: "2020",
  },
  {
    name: "Oracle 認定 Java プログラマ ゴールド",
    issuer: "Oracle",
    year: "2018",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">経歴</h1>
            <p className="mt-4 text-xl text-gray-600">
              私のこれまでの経歴、職歴、学歴などをご紹介します。
            </p>
          </div>

          {/* プロフィール概要 */}
          <div className="mt-12 bg-white shadow-md rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="p-8 md:p-10 md:flex-1">
                <h2 className="text-2xl font-bold text-gray-900">unknown</h2>
                <p className="mt-1 text-lg text-blue-600">フルスタックエンジニア / Web開発者</p>
                
                <p className="mt-4 text-gray-700">
                  7年以上のWeb開発経験を持ち、フロントエンドからバックエンドまで幅広い技術スタックを活用したアプリケーション開発に携わってきました。
                  ユーザー中心の設計思想と技術的な最適化の両立を重視し、品質の高いソリューション提供を心がけています。
                  チーム開発でのリーダーシップ経験も豊富で、アジャイル開発手法を用いたプロジェクト管理も得意としています。
                </p>
                
                <div className="mt-6">
                  <Link 
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-blue-600 rounded-md text-blue-600 font-medium hover:bg-blue-50 transition"
                  >
                    <FiDownload className="mr-2" />
                    履歴書をダウンロード
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-100 md:w-1/3 flex items-center justify-center p-8">
                <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>

          {/* 職歴 */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900">職歴</h2>
            
            <div className="mt-8 space-y-12">
              {workExperiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4 transition-all hover:pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <span className="text-sm font-medium text-blue-600">{exp.period}</span>
                  </div>
                  <p className="mt-1 text-lg text-gray-900">{exp.company}</p>
                  <p className="mt-3 text-gray-700">{exp.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 学歴 */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900">学歴</h2>
            
            <div className="mt-8 space-y-10">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-gray-300 pl-4 transition-all hover:pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <span className="text-sm font-medium text-gray-600">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-lg text-gray-900">{edu.institution}</p>
                  <p className="mt-3 text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 資格・認定 */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900">資格・認定</h2>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white shadow-sm rounded-md p-4 hover:shadow-md transition">
                  <h3 className="font-medium text-gray-900">{cert.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{cert.issuer} · {cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-gray-900">一緒に働きませんか？</h2>
            <p className="mt-3 text-gray-700">
              現在、新しい挑戦やプロジェクトへの参加に興味があります。
              お仕事のご相談やプロジェクトの詳細など、お気軽にご連絡ください。
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            >
              お問い合わせ <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}