import { describe, test, expect } from "bun:test";
import { truncateText, capitalizeFirstLetter, linkifyUrls } from "../utils/string-utils";

describe("文字列ユーティリティ関数", () => {
  describe("truncateText", () => {
    test("文字列が最大長より短い場合はそのまま返す", () => {
      const result = truncateText("Hello", 10);
      expect(result).toBe("Hello");
    });
    
    test("文字列が最大長より長い場合は切り詰める", () => {
      const result = truncateText("Hello World", 5);
      expect(result).toBe("Hello...");
    });
    
    test("カスタムサフィックスを使用できる", () => {
      const result = truncateText("Hello World", 5, " [more]");
      expect(result).toBe("Hello [more]");
    });
  });
  
  describe("capitalizeFirstLetter", () => {
    test("最初の文字を大文字に変換する", () => {
      const result = capitalizeFirstLetter("hello");
      expect(result).toBe("Hello");
    });
    
    test("空文字列の場合は空文字列を返す", () => {
      const result = capitalizeFirstLetter("");
      expect(result).toBe("");
    });
    
    test("すでに先頭が大文字の場合はそのまま返す", () => {
      const result = capitalizeFirstLetter("Hello");
      expect(result).toBe("Hello");
    });
  });
  
  describe("linkifyUrls", () => {
    test("URLをリンクに変換する", () => {
      const text = "ポートフォリオは https://example.com で確認できます";
      const result = linkifyUrls(text);
      expect(result).toBe(
        'ポートフォリオは <a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a> で確認できます'
      );
    });
    
    test("複数のURLを変換できる", () => {
      const text = "サイト1: http://example.com サイト2: https://example.org";
      const result = linkifyUrls(text);
      expect(result).toBe(
        'サイト1: <a href="http://example.com" target="_blank" rel="noopener noreferrer">http://example.com</a> ' +
        'サイト2: <a href="https://example.org" target="_blank" rel="noopener noreferrer">https://example.org</a>'
      );
    });
    
    test("URLがない場合はテキストをそのまま返す", () => {
      const text = "URLはありません";
      const result = linkifyUrls(text);
      expect(result).toBe(text);
    });
  });
});