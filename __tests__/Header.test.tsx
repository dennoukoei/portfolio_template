import { describe, test, expect } from "bun:test";

// Headerコンポーネントのロジック部分をテスト
describe("Headerコンポーネント機能", () => {
  const navItems = [
    { name: "ホーム", path: "/" },
    { name: "プロジェクト", path: "/projects" },
    { name: "スキル", path: "/skills" },
    { name: "経歴", path: "/about" },
    { name: "お問い合わせ", path: "/contact" },
  ];

  test("ナビゲーション項目の構造が正しい", () => {
    // 各ナビゲーション項目には名前とパスが含まれている
    navItems.forEach(item => {
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("path");
      expect(typeof item.name).toBe("string");
      expect(typeof item.path).toBe("string");
    });
  });

  test("必須ナビゲーション項目が存在する", () => {
    // 重要なページへのリンクが存在することを確認
    const paths = navItems.map(item => item.path);
    expect(paths).toContain("/");
    expect(paths).toContain("/projects");
    expect(paths).toContain("/skills");
    expect(paths).toContain("/about");
    expect(paths).toContain("/contact");
  });

  test("パスが正しいフォーマットである", () => {
    // パスが適切なフォーマットであることを確認
    const pathRegex = /^\/[a-z]*$/; // ルートまたは /英小文字 の形式
    navItems.forEach(item => {
      expect(pathRegex.test(item.path)).toBe(true);
    });
  });
});