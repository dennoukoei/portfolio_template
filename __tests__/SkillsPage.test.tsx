import { describe, test, expect, mock } from "bun:test";
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
  
  // 追加のテスト - スキルレベルの視覚化
  describe("スキルレベルの視覚化", () => {
    // スキルレベルからスタイルへの変換関数のテスト
    test("スキルレベルに応じて適切なスタイル値が生成される", () => {
      // レベルからスタイル値への変換関数
      const getStyleValueFromLevel = (level: number): number => {
        // 例：レベル（0-100）をパーセンテージに変換
        return Math.min(Math.max(level, 0), 100);
      };
      
      // 異なるレベルでテスト
      expect(getStyleValueFromLevel(90)).toBe(90);
      expect(getStyleValueFromLevel(0)).toBe(0);
      expect(getStyleValueFromLevel(100)).toBe(100);
      
      // 範囲外の値
      expect(getStyleValueFromLevel(-10)).toBe(0); // 下限未満は0に
      expect(getStyleValueFromLevel(120)).toBe(100); // 上限超過は100に
    });
    
    // スキルレベルのカテゴリ分けをテスト
    test("スキルレベルからカテゴリへの変換が正しい", () => {
      // レベルからカテゴリへの変換関数
      const getLevelCategory = (level: number): string => {
        if (level < 30) return "初級";
        if (level < 70) return "中級";
        return "上級";
      };
      
      // カテゴリ判定のテスト
      expect(getLevelCategory(20)).toBe("初級");
      expect(getLevelCategory(50)).toBe("中級");
      expect(getLevelCategory(85)).toBe("上級");
    });
  });
  
  // スキルページの状態管理テスト
  describe("スキルページの状態管理", () => {
    // スキルホバー状態管理のシミュレーション
    test("スキルホバー状態が適切に更新される", () => {
      // 状態変数とその更新関数をシミュレーション
      let hoveredSkill: string | null = null;
      const setHoveredSkill = (skill: string | null) => {
        hoveredSkill = skill;
      };
      
      // 初期状態の確認
      expect(hoveredSkill).toBeNull();
      
      // ホバー状態の更新
      setHoveredSkill("React");
      expect(hoveredSkill).toBe("React");
      
      // ホバー解除
      setHoveredSkill(null);
      expect(hoveredSkill).toBeNull();
    });
    
    // フィルタリング機能のテスト
    test("スキルフィルタリングが正しく機能する", () => {
      // サンプルスキル一覧
      const allSkills = [
        { name: "React", category: "フロントエンド", level: 90 },
        { name: "Node.js", category: "バックエンド", level: 85 },
        { name: "MongoDB", category: "データベース", level: 80 },
        { name: "TypeScript", category: "フロントエンド", level: 88 }
      ];
      
      // カテゴリによるフィルタリング関数
      const filterByCategory = (skills: any[], category: string | null) => {
        if (!category) return skills;
        return skills.filter(skill => skill.category === category);
      };
      
      // フィルタリング結果のテスト
      expect(filterByCategory(allSkills, null).length).toBe(4); // フィルタなし
      expect(filterByCategory(allSkills, "フロントエンド").length).toBe(2);
      expect(filterByCategory(allSkills, "バックエンド").length).toBe(1);
      expect(filterByCategory(allSkills, "データベース").length).toBe(1);
      
      // 存在しないカテゴリでのフィルタリング
      expect(filterByCategory(allSkills, "デザイン").length).toBe(0);
    });
    
    // レベルによるソート機能のテスト
    test("スキルのレベルによるソートが正しく機能する", () => {
      // サンプルスキル一覧
      const skills = [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "MongoDB", level: 80 }
      ];
      
      // レベルでソートする関数（昇順と降順）
      const sortByLevelAsc = (skillsArr: any[]) => {
        return [...skillsArr].sort((a, b) => a.level - b.level);
      };
      
      const sortByLevelDesc = (skillsArr: any[]) => {
        return [...skillsArr].sort((a, b) => b.level - a.level);
      };
      
      // ソート結果のテスト
      const ascSorted = sortByLevelAsc(skills);
      expect(ascSorted[0].name).toBe("MongoDB");
      expect(ascSorted[2].name).toBe("React");
      
      const descSorted = sortByLevelDesc(skills);
      expect(descSorted[0].name).toBe("React");
      expect(descSorted[2].name).toBe("MongoDB");
    });
  });
  
  // アニメーションとインタラクションのテスト
  describe("アニメーションとインタラクション", () => {
    // カラーユーティリティ関数のテスト
    test("スキルランダムカラージェネレーターが有効な色を生成する", () => {
      // ランダム色生成関数（実際のコンポーネントの関数に相当）
      const getRandomColor = (seed: string): string => {
        // シードに基づいて一貫性のある色を生成
        const hash = seed.split('').reduce((acc, char) => {
          return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);
        
        const h = Math.abs(hash % 360);
        const s = 70 + (hash % 20); // 彩度70-90%
        const l = 65 + (hash % 10); // 明度65-75%
        
        return `hsl(${h}, ${s}%, ${l}%)`;
      };
      
      // 色がHSL形式で生成されるか確認
      const color1 = getRandomColor("React");
      const color2 = getRandomColor("Node.js");
      
      expect(color1).toMatch(/^hsl\(\d+, \d+%, \d+%\)$/);
      expect(color2).toMatch(/^hsl\(\d+, \d+%, \d+%\)$/);
      
      // 同じシードからは同じ色が生成されるかテスト
      expect(getRandomColor("React")).toBe(getRandomColor("React"));
      
      // 異なるシードからは異なる色が生成されるかテスト
      expect(getRandomColor("React")).not.toBe(getRandomColor("Vue"));
    });
  });
});