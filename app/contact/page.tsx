"use client";

import { useState } from "react";
import { FiSend, FiCheck, FiAlertTriangle } from "react-icons/fi";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type FormValues = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // 実際の実装ではここでAPIエンドポイントを呼び出します
      // 現在はモックの成功レスポンスを返しています
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form data submitted:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("送信中にエラーが発生しました。後でもう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">お問い合わせ</h1>
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300">
            プロジェクトの相談、お仕事のご依頼、技術的なご質問など、お気軽にお問い合わせください。
          </p>
          
          <div className="mt-12">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 sm:p-10">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-green-100 dark:bg-green-900">
                    <FiCheck className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                    ありがとうございます！
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    お問い合わせを受け付けました。内容を確認次第、できるだけ早くご返信いたします。
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2 border border-blue-600 dark:border-blue-500 rounded-md text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition"
                  >
                    新しい問い合わせを作成
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm ${
                          errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                        {...register("name", {
                          required: "お名前は必須項目です",
                        })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm ${
                          errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                        {...register("email", {
                          required: "メールアドレスは必須項目です",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "有効なメールアドレスを入力してください",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        会社/組織名
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                        {...register("company")}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        件名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm ${
                          errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                        {...register("subject", {
                          required: "件名は必須項目です",
                        })}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      メッセージ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm ${
                        errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      }`}
                      {...register("message", {
                        required: "メッセージは必須項目です",
                        minLength: {
                          value: 10,
                          message: "メッセージは10文字以上で入力してください",
                        },
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <FiAlertTriangle className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-red-700 dark:text-red-400">{submitError}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 transition ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          送信中...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          送信する
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="mt-16 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">その他の連絡方法</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">メール</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  <a
                    href="mailto:info@example.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    contact@unkown.dev
                  </a>
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">SNS</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Twitter
                  </a>
                  {" / "}
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}