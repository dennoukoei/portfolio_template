import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-4">ページが見つかりません</h2>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          お探しのページは存在しないか、移動されました。URLをご確認いただくか、以下のリンクからホームページにお戻りください。
        </p>
        <div className="mt-8 space-x-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            ホームに戻る
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            プロジェクト一覧を見る
          </Link>
        </div>
      </div>
    </div>
  );
}