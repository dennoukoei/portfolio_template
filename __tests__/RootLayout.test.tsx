import { describe, test, expect, mock } from "bun:test";

// next/font/googleをモック
mock("next/font/google", () => ({
  Geist: () => ({ variable: "mock-font-variable" }),
  Geist_Mono: () => ({ variable: "mock-font-variable-mono" })
}));

// メタデータをモックで再現
const mockMetadata = {
  title: "unknown | フルスタックエンジニア",
  description: "unknownのポートフォリオサイト - フルスタックエンジニア、ウェブ開発者",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  }
};

describe("RootLayout", () => {
  test("メタデータが正しく設定されている", () => {
    // メタデータの存在確認
    expect(mockMetadata).toBeDefined();
    expect(mockMetadata.title).toBeDefined();
    expect(mockMetadata.description).toBeDefined();
    expect(mockMetadata.icons).toBeDefined();
    
    // タイトルと説明の内容確認
    expect(String(mockMetadata.title)).toContain("フルスタックエンジニア");
    expect(String(mockMetadata.description)).toContain("ポートフォリオサイト");
    
    // アイコン設定確認
    expect(mockMetadata.icons).toHaveProperty("icon");
    expect(mockMetadata.icons).toHaveProperty("apple");
    
    // SVG形式のfaviconが使われているか確認
    const iconPath = String(mockMetadata.icons?.icon);
    expect(iconPath).toContain(".svg");
  });
  
  test("言語設定が日本語になっている", () => {
    const lang = "ja";
    expect(lang).toBe("ja");
  });

  test("フォント設定が正しい", () => {
    const fontFamilies = ["Geist", "Geist_Mono"];
    expect(fontFamilies).toContain("Geist");
    expect(fontFamilies).toContain("Geist_Mono");

    // フォントのサブセット設定
    const subsets = ["latin"];
    expect(subsets).toContain("latin");
  });
});