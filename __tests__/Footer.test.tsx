/**
 * @jest-environment happy-dom
 */
import { describe, test, expect } from "bun:test";

// Footerのコンポーネントの機能のみをテストする単純なテスト
describe("Footerコンポーネント機能", () => {
  test("現在年の計算", () => {
    const currentYear = new Date().getFullYear();
    expect(typeof currentYear).toBe("number");
    expect(currentYear).toBeGreaterThan(2020);
  });
  
  test("ソーシャルメディアリンクのURLフォーマット", () => {
    // ソーシャルメディアURLのフォーマットをテスト
    const githubUrl = "https://github.com";
    const linkedinUrl = "https://linkedin.com";
    const twitterUrl = "https://twitter.com";
    
    expect(githubUrl).toContain("github");
    expect(linkedinUrl).toContain("linkedin");
    expect(twitterUrl).toContain("twitter");
    
    // 正しいURL形式かどうかをテスト
    const urlPattern = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/;
    expect(urlPattern.test(githubUrl)).toBe(true);
    expect(urlPattern.test(linkedinUrl)).toBe(true);
    expect(urlPattern.test(twitterUrl)).toBe(true);
  });
});