import { Metadata } from "next";

export const metadata: Metadata = {
  title: "スキル | unknown",
  description: "unknownのスキルセット - フロントエンド、バックエンド、データベース、DevOpsなど幅広い技術スタック",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}