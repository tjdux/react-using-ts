import { useMemo } from "react";

export default function Pagination({
  pageRange,
  currentPage,
  maxPage,
  onPageChange,
}: {
  pageRange: number;
  currentPage: number;
  maxPage: number;
  onPageChange: (page: number) => void;
}) {
  // 중앙값
  const half = Math.floor(pageRange / 2);
  // 실제 렌더링될 페이지 숫자
  const pages = useMemo(() => {
    let start = currentPage - half;
    let end = currentPage + half;

    if (start < 1) {
      start = 1;
      end = Math.min(maxPage, pageRange);
    }

    if (end > maxPage) {
      end = maxPage;
      start = Math.max(1, maxPage - pageRange + 1);
    }

    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }

    return arr;
  }, [currentPage, half, maxPage, pageRange]);

  return (
    <>
      <div className="flex justify-center mt-12 gap-2">
        {/* 이전 버튼 */}
        <button
          className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
        {/* 
        currentPage === page
          ? "bg-blue-500 text-white"
          : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
        */}
        {pages.map((page) => (
          <button
            className={
              page === currentPage
                ? "w-10 h-10 rounded-lg cursor-pointer bg-blue-500 text-white"
                : "w-10 h-10 rounded-lg cursor-pointer bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
            }
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        {/* 다음 버튼 */}
        <button
          className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 disabled:opacity-50"
          disabled={currentPage === maxPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
