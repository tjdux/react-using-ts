const items = Array.from({ length: 402 }, (_, i) => `Item ${i + 1}`);
import { useEffect, useLayoutEffect, useRef } from "react";

export default function ScrollComparison() {
  const refEffect = useRef<HTMLDivElement>(null);
  const refLayout = useRef<HTMLDivElement>(null);

  // useEffect
  useEffect(() => {
    refEffect.current?.scrollTo({ top: refEffect.current.scrollHeight });
  }, []);

  // useLayoutEffect
  useLayoutEffect(() => {
    refLayout.current?.scrollTo({ top: refLayout.current?.scrollHeight });
  }, []);

  const boxClass =
    "border rounded-lg h-48 w-full overflow-auto bg-gray-100 p-2";

  return (
    <div className="space-y-8 p-8 max-w-2xl mx-auto">
      {/* useEffect 스크롤 박스 */}
      <div>
        <h2 className="text-lg font-semibold mb-2">useEffect 스크롤</h2>
        <div ref={refEffect} className={boxClass}>
          {items.map((text) => (
            <div key={text} className="py-1">
              {text}
            </div>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600">
          렌더 후 스크롤 → 처음엔 위에서 시작하다가 아래로 내려가는 걸 볼 수
          있습니다.
        </p>
      </div>

      {/* useLayoutEffect 스크롤 박스 */}
      <div>
        <h2 className="text-lg font-semibold mb-2">useLayoutEffect 스크롤</h2>
        <div ref={refLayout} className={boxClass}>
          {items.map((text) => (
            <div key={text} className="py-1">
              {text}
            </div>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600">
          렌더 전 스크롤 → 처음부터 맨 아래에 렌더되어 깜빡임이 없습니다.
        </p>
      </div>
    </div>
  );
}
