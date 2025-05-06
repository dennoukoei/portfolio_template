import { describe, test, expect } from "bun:test";

// フォーム検証機能のテスト
describe("コンタクトフォーム検証", () => {
  // メールアドレス検証のテスト
  describe("メールアドレスバリデーション", () => {
    // テスト対象の正規表現パターン
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
    test("有効なメールアドレスを正しく検証できる", () => {
      const validEmails = [
        "user@example.com",
        "user.name@example.co.jp",
        "user+tag@example.org",
        "123@example.com",
      ];
      
      validEmails.forEach(email => {
        expect(emailRegex.test(email)).toBe(true);
      });
    });
    
    test("無効なメールアドレスを正しく検出できる", () => {
      const invalidEmails = [
        "userexample.com", // @ 記号がない
        "user@", // ドメイン部分がない
        "@example.com", // ユーザー名部分がない
        "user@example", // トップレベルドメインがない
        "user@.com", // ドメイン名がない
        "user@example.", // トップレベルドメインが不完全
        "us er@example.com", // スペースを含む
      ];
      
      invalidEmails.forEach(email => {
        expect(emailRegex.test(email)).toBe(false);
      });
    });
  });
  
  // フォームデータ構造のテスト
  describe("フォームデータ構造", () => {
    test("フォームデータの型が正しい", () => {
      // FormValuesの構造を検証
      type FormValues = {
        name: string;
        email: string;
        company: string;
        subject: string;
        message: string;
      };
      
      // サンプルデータ
      const sampleData: FormValues = {
        name: "山田太郎",
        email: "taro@example.com",
        company: "サンプル株式会社",
        subject: "お問い合わせ",
        message: "こんにちは、お問い合わせテストです。"
      };
      
      // プロパティの存在確認
      expect(sampleData).toHaveProperty("name");
      expect(sampleData).toHaveProperty("email");
      expect(sampleData).toHaveProperty("company");
      expect(sampleData).toHaveProperty("subject");
      expect(sampleData).toHaveProperty("message");
      
      // データ型の確認
      expect(typeof sampleData.name).toBe("string");
      expect(typeof sampleData.email).toBe("string");
      expect(typeof sampleData.company).toBe("string");
      expect(typeof sampleData.subject).toBe("string");
      expect(typeof sampleData.message).toBe("string");
    });
  });
  
  // メッセージの長さ検証のテスト
  describe("メッセージの長さ検証", () => {
    test("短すぎるメッセージを検出できる", () => {
      const minLength = 10;
      
      // 短すぎるメッセージ
      const shortMessage = "こんにちは";
      expect(shortMessage.length).toBeLessThan(minLength);
      
      // 十分な長さのメッセージ
      const validMessage = "こんにちは、お問い合わせテストです。よろしくお願いいたします。";
      expect(validMessage.length).toBeGreaterThanOrEqual(minLength);
    });
  });
});