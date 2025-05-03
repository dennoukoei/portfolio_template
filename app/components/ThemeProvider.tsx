"use client";

/**
 * 注意: このThemeProviderは現在使用されていません。
 * ライト/ダークモード切替機能はスコープアウトされました。
 * 将来的に再度実装する場合のために、コードは残しています。
 */

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  // クライアントサイドでのみレンダリングされるようにする
  useEffect(() => {
    setMounted(true);
  }, []);

  // マウント前はテーマ切り替えを適用しない（ハイドレーションエラー防止）
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}