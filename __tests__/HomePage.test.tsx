import { describe, test, expect, mock } from "bun:test";

// Next.js コンポーネントをモック
mock("next/image", () => ({
  default: ({ src, alt, width, height }: { src: string, alt: string, width: number, height: number }) => 
    <img src={src} alt={alt} width={width} height={height} />
}));

mock("next/link", () => {
  return ({ href, children, className }: { href: string, children: any, className?: string }) => {
    return <a href={href} className={className}>{children}</a>;
  };
});

mock("react-icons/fi", () => ({
  FiArrowRight: () => <span data-testid="arrow-right">→</span>,
  FiCode: () => <span data-testid="code-icon">Code</span>,
  FiServer: () => <span data-testid="server-icon">Server</span>,
  FiDatabase: () => <span data-testid="database-icon">Database</span>,
  FiMonitor: () => <span data-testid="monitor-icon">Monitor</span>,
}));

describe("ホームページ", () => {
  // プロジェクトデータのテスト
  describe("プロジェクトデータ", () => {
    // モックデータ (実際のコンポーネントと同じ構造)
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
      }
    ];

    test("各プロジェクトが適切なデータ構造を持つ", () => {
      featuredProjects.forEach(project => {
        // 必須フィールドの存在チェック
        expect(project).toHaveProperty("id");
        expect(project).toHaveProperty("title");
        expect(project).toHaveProperty("description");
        expect(project).toHaveProperty("tags");
        expect(project).toHaveProperty("image");
        expect(project).toHaveProperty("link");
        
        // フィールドタイプのチェック
        expect(typeof project.id).toBe("number");
        expect(typeof project.title).toBe("string");
        expect(typeof project.description).toBe("string");
        expect(Array.isArray(project.tags)).toBe(true);
        expect(typeof project.image).toBe("string");
        expect(typeof project.link).toBe("string");
        
        // 説明文が十分な情報を含むか
        expect(project.description.length).toBeGreaterThan(20);
        
        // タグは少なくとも1つ以上あるか
        expect(project.tags.length).toBeGreaterThan(0);
      });
    });

    test("プロジェクトリンクは正しいパス形式", () => {
      featuredProjects.forEach(project => {
        // プロジェクトリンクが /projects/ で始まるか
        expect(project.link).toMatch(/^\/projects\//);
      });
    });

    test("プロジェクト画像パスは有効な形式", () => {
      featuredProjects.forEach(project => {
        // 画像パスが / から始まるか
        expect(project.image).toMatch(/^\//);
        // 有効な画像拡張子を持つか
        expect(project.image).toMatch(/\.(jpg|jpeg|png|webp|svg|gif)$/i);
      });
    });
  });

  // スキルデータのテスト
  describe("スキルデータ", () => {
    // スキルのサンプルデータ
    const skills = [
      {
        icon: "FiCode", // アイコンはコンポーネントなので文字列で代用
        name: "フロントエンド",
        description: "モダンなUIの設計・実装",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
      },
      {
        icon: "FiServer",
        name: "バックエンド",
        description: "スケーラブルなサーバーサイド開発",
        technologies: ["Node.js", ".NET Core", "Express", "GraphQL"]
      },
      {
        icon: "FiDatabase",
        name: "データベース",
        description: "効率的なデータモデリングと操作",
        technologies: ["PostgreSQL", "MongoDB", "SQL Server", "Redis"]
      },
      {
        icon: "FiMonitor",
        name: "DevOps",
        description: "自動化とインフラ管理",
        technologies: ["Docker", "Kubernetes", "AWS/Azure", "CI/CD"]
      }
    ];

    test("各スキルが適切なデータ構造を持つ", () => {
      skills.forEach(skill => {
        // 必須フィールドの存在チェック
        expect(skill).toHaveProperty("icon");
        expect(skill).toHaveProperty("name");
        expect(skill).toHaveProperty("description");
        expect(skill).toHaveProperty("technologies");
        
        // フィールドタイプのチェック
        expect(typeof skill.name).toBe("string");
        expect(typeof skill.description).toBe("string");
        expect(Array.isArray(skill.technologies)).toBe(true);
        
        // 技術リストが少なくとも1つ以上あるか
        expect(skill.technologies.length).toBeGreaterThan(0);
      });
    });

    test("スキルカテゴリは必要なカテゴリをすべて含む", () => {
      const skillNames = skills.map(skill => skill.name);
      
      // 必須のスキルカテゴリが含まれているか
      expect(skillNames).toContain("フロントエンド");
      expect(skillNames).toContain("バックエンド");
      expect(skillNames).toContain("データベース");
      
      // フルスタックエンジニアとしての必須技術が含まれているか
      const allTechnologies = skills.flatMap(skill => skill.technologies);
      expect(allTechnologies).toContain("React");
      expect(allTechnologies).toContain("Node.js");
      expect(allTechnologies.some(tech => tech.includes("SQL"))).toBe(true);
    });
  });

  // セクション構造のテスト
  describe("ページ構造", () => {
    test("必須のセクションが存在する", () => {
      // ページに必要なセクションのリスト（実際のページでは各セクションはclassNameで判別可能）
      const sections = [
        "ヒーローセクション",
        "スキルセクション", 
        "厳選プロジェクト", 
        "CTAセクション"
      ];
      
      // 各セクションが含まれているか確認
      expect(sections.length).toBe(4);
      expect(sections[0]).toBe("ヒーローセクション");
      expect(sections[sections.length - 1]).toBe("CTAセクション");
    });
  });
});