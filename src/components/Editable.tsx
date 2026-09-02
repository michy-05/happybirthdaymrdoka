import { useEffect, useRef } from "react";

const STORAGE_PREFIX = "birthday-poster:";

export function Editable({
  id,
  as: Tag = "p",
  className,
  children,
}: {
  id: string;
  as?: "p" | "h1" | "h2" | "span";
  className?: string;
  children: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_PREFIX + id);
    if (saved !== null && ref.current) ref.current.innerText = saved;
  }, [id]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      contentEditable
      suppressContentEditableWarning
      onInput={() => {
        if (ref.current) window.localStorage.setItem(STORAGE_PREFIX + id, ref.current.innerText);
      }}
      className={`rounded-sm outline-none transition-colors focus:bg-rose-gold/10 ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}
