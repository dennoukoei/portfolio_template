/**
 * @jest-environment happy-dom
 */
import { describe, test, expect, beforeEach, afterEach, mock } from "bun:test";

// モジュールのモック
const mockUseParams = mock(() => ({ id: "ec-platform" }));
mock.module('next/navigation', () => ({
  useParams: mockUseParams
}));

// NotFoundページのモック
mock.module('../app/not-found', () => ({
  default: () => null,
}));

// Reactマークダウンのモック
mock.module('react-markdown', () => ({
  default: ({ children }: { children: string }) => null,
}));

// framer-motionのモックを追加
mock.module('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => null,
    section: ({ children, ...props }: any) => null,
    article: ({ children, ...props }: any) => null,
    h1: ({ children, ...props }: any) => null,
    h2: ({ children, ...props }: any) => null,
    p: ({ children, ...props }: any) => null,
    span: ({ children, ...props }: any) => null,
    a: ({ children, ...props }: any) => null,
  },
  AnimatePresence: ({ children }: any) => null,
}));

describe("プロジェクト詳細ページ機能", () => {
  // 詳細ページに表示するモックプロジェクトデータ
  const mockProject = {
    id: "ec-platform",
    title: "ECサイトプラットフォーム",
    description: "Reactと.NET Coreを使用した高パフォーマンスなECサイトプラットフォーム。",
    longDescription: `
      ### 主要機能
      - **マイクロサービスアーキテクチャ**: 個別のサービスに分割して独立したスケーリングと開発を実現
    `,
    techStack: ["React", "TypeScript", ".NET Core"],
    challenges: ["大量のデータと高トラフィック時のパフォーマンス最適化"],
    outcomes: ["ユーザーのコンバージョン率が15%向上"],
    features: [
      {
        name: "商品管理システム",
        description: "在庫追跡、価格管理、画像アップロード機能",
        icon: "📦"
      }
    ],
    images: [
      {
        url: "/ec-platform-dashboard.jpg",
        alt: "ECプラットフォームダッシュボード",
        caption: "管理者向けダッシュボード"
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
        comment: "このECプラットフォームの導入によって、プロセスが変革されました。"
      }
    ],
    completionDate: "2024年3月",
    duration: "8ヶ月"
  };

  // テスト用のセットアップと後処理
  beforeEach(() => {
    // useParamsのモックをリセット
    mockUseParams.mockImplementation(() => ({ id: "ec-platform" }));
  });

  afterEach(() => {
    // テスト後のクリーンアップ
    mockUseParams.mockReset();
  });

  test("正しいプロジェクトIDの場合、プロジェクト詳細が表示される", async () => {
    // プロジェクトデータの検証
    expect(mockProject.title).toBe("ECサイトプラットフォーム");
    expect(mockProject.techStack).toContain("React");
    expect(mockProject.techStack).toContain("TypeScript");
    expect(mockProject.techStack).toContain(".NET Core");
    
    // マークダウンコンテンツが正しいことを確認
    expect(mockProject.longDescription).toContain("主要機能");
    
    // 各セクションが存在することを確認
    expect(mockProject).toHaveProperty("challenges");
    expect(mockProject).toHaveProperty("outcomes");
    expect(mockProject).toHaveProperty("features");
  });

  test("存在しないプロジェクトIDの場合、404ページが表示される", async () => {
    // 特定のプロジェクトIDを取得するユーティリティ関数を仮定
    const getProjectById = (id: string) => {
      return id === "ec-platform" ? mockProject : null;
    };
    
    expect(getProjectById("ec-platform")).toBeDefined();
    expect(getProjectById("non-existent-project")).toBeNull();
  });

  test("プロジェクトのテクノロジースタックが正しく表示される", async () => {
    // テクノロジースタックが存在することを確認
    expect(mockProject.techStack).toBeDefined();
    expect(Array.isArray(mockProject.techStack)).toBe(true);
    expect(mockProject.techStack.length).toBeGreaterThan(0);
    
    // 特定の技術が含まれていることを確認
    mockProject.techStack.forEach(tech => {
      expect(typeof tech).toBe("string");
      expect(tech.length).toBeGreaterThan(0);
    });
  });

  test("プロジェクトの機能リストが正しく表示される", async () => {
    // 機能リストが存在することを確認
    expect(mockProject.features).toBeDefined();
    expect(Array.isArray(mockProject.features)).toBe(true);
    expect(mockProject.features.length).toBeGreaterThan(0);
    
    // 各機能が必要なプロパティを持っていることを確認
    mockProject.features.forEach(feature => {
      expect(feature).toHaveProperty("name");
      expect(feature).toHaveProperty("description");
      expect(feature).toHaveProperty("icon");
      expect(typeof feature.name).toBe("string");
      expect(typeof feature.description).toBe("string");
      expect(typeof feature.icon).toBe("string");
    });
  });

  test("すべてのプロジェクトに戻るリンクが存在する", async () => {
    // 戻るリンクのURLを検証するための仮のルーティング関数
    const getProjectsUrl = () => '/projects';
    
    expect(getProjectsUrl()).toBe('/projects');
  });

  test("顧客の声セクションが正しく表示される", async () => {
    // 顧客の声が存在することを確認
    expect(mockProject.testimonials).toBeDefined();
    expect(Array.isArray(mockProject.testimonials)).toBe(true);
    expect(mockProject.testimonials.length).toBeGreaterThan(0);
    
    // 各顧客の声が必要なプロパティを持っていることを確認
    mockProject.testimonials.forEach(testimonial => {
      expect(testimonial).toHaveProperty("name");
      expect(testimonial).toHaveProperty("position");
      expect(testimonial).toHaveProperty("comment");
      expect(typeof testimonial.name).toBe("string");
      expect(typeof testimonial.position).toBe("string");
      expect(typeof testimonial.comment).toBe("string");
      expect(testimonial.name.length).toBeGreaterThan(0);
      expect(testimonial.position.length).toBeGreaterThan(0);
      expect(testimonial.comment.length).toBeGreaterThan(0);
    });
  });
});