import { describe, test, expect } from "bun:test";

// プロジェクト紹介ページのテスト
describe("プロジェクトページ機能", () => {
  // プロジェクトデータのモック
  const mockProjects = [
    {
      id: 1,
      title: "ECサイトプラットフォーム",
      description: "Reactと.NET Coreを使用した高パフォーマンスなECサイト",
      tags: ["React", "TypeScript", ".NET Core", "SQL Server"],
      image: "/project-image.jpg",
      link: "/projects/ec-platform"
    },
    {
      id: 2,
      title: "AIチャットアプリケーション",
      description: "Next.jsとOpenAI APIを活用したチャットアプリ",
      tags: ["Next.js", "OpenAI", "WebSockets"],
      image: "/chat-app.jpg",
      link: "/projects/ai-chat"
    }
  ];

  test("プロジェクトデータの構造が正しい", () => {
    mockProjects.forEach(project => {
      // 必須プロパティの存在確認
      expect(project).toHaveProperty("id");
      expect(project).toHaveProperty("title");
      expect(project).toHaveProperty("description");
      expect(project).toHaveProperty("tags");
      expect(project).toHaveProperty("image");
      expect(project).toHaveProperty("link");
      
      // データ型の確認
      expect(typeof project.id).toBe("number");
      expect(typeof project.title).toBe("string");
      expect(typeof project.description).toBe("string");
      expect(Array.isArray(project.tags)).toBe(true);
      expect(typeof project.image).toBe("string");
      expect(typeof project.link).toBe("string");
    });
  });

  test("プロジェクトIDが一意である", () => {
    const ids = mockProjects.map(project => project.id);
    const uniqueIds = [...new Set(ids)];
    expect(ids.length).toBe(uniqueIds.length);
  });

  test("プロジェクトリンクが正しいフォーマットである", () => {
    const linkPattern = /^\/projects\/[a-z0-9-]+$/;
    mockProjects.forEach(project => {
      expect(linkPattern.test(project.link)).toBe(true);
    });
  });

  test("プロジェクトタグが空でない", () => {
    mockProjects.forEach(project => {
      expect(project.tags.length).toBeGreaterThan(0);
      project.tags.forEach(tag => {
        expect(tag.trim()).not.toBe("");
      });
    });
  });
});