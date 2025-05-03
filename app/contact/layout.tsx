import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | unknown",
  description: "unknownへのお問い合わせ - プロジェクトの相談、お仕事の依頼など",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}