import { describe, test, expect } from "bun:test";
import { truncateText } from "../utils/string-utils";

// スキルカテゴリとスキルデータの構造テスト
describe("スキルページ機能", () => {
  // スキルデータのモック（実際のコンポーネントからの抽出）
  const mockSkillCategory = {
    name: "フロントエンド開発",
    icon: "icon-component",
    skills: [
      { name: "React", level: 90, description: "コンポーネント設計、Hooks、状態管理" },
      { name: "Next.js", level: 85, description: "SSR/SSG, API Routes, App Router" },
    ]
  };

  test("スキルカテゴリの構造が正しい", () => {
    // カテゴリにname, icon, skillsプロパティがあるか
    expect(mockSkillCategory).toHaveProperty("name");
    expect(mockSkillCategory).toHaveProperty("icon");
    expect(mockSkillCategory).toHaveProperty("skills");
    
    // skillsが配列であることを確認
    expect(Array.isArray(mockSkillCategory.skills)).toBe(true);
  });

  test("スキルデータの構造が正しい", () => {
    const skill = mockSkillCategory.skills[0];
    
    // 各スキルにname, level, descriptionプロパティがあるか
    expect(skill).toHaveProperty("name");
    expect(skill).toHaveProperty("level");
    expect(skill).toHaveProperty("description");
    
    // レベルが0-100の間であるか
    expect(skill.level).toBeGreaterThanOrEqual(0);
    expect(skill.level).toBeLessThanOrEqual(100);
  });

  test("スキル説明が適切な長さに切り詰められるか", () => {
    const skill = mockSkillCategory.skills[0];
    const maxLength = 20;
    
    // 文字列ユーティリティ関数を使って説明文を切り詰める
    const truncated = truncateText(skill.description, maxLength);
    
    // 切り詰めた結果が最大長さ+サフィックス長以下であることを確認
    expect(truncated.length).toBeLessThanOrEqual(maxLength + 3); // 3は"..."の長さ
    
    // 元の文字列が最大長さより長い場合、切り詰められていることを確認
    if (skill.description.length > maxLength) {
      expect(truncated).toContain("...");
    }
  });
});