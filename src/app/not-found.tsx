"use client";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-bold text-green-700">404</h1>

      <h2 className="text-3xl font-semibold text-gray-800 mt-4">
        عذراً، هذه الصفحة غير موجودة
      </h2>
      <p className="text-gray-600 mt-2 text-lg max-w-md">
        ربما تم نقل الصفحة أو أن الرابط الذي حاولت الوصول إليه غير صحيح. لا
        تقلق، يمكنك العودة للبداية.
      </p>

      <button
        onClick={() => router.back()}
        className="mt-8 px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors duration-300 font-bold"
      >
        العودة للصفحة الرئيسية
      </button>
    </div>
  );
}
