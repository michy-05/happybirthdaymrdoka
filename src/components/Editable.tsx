const STORAGE_PREFIX = "birthday-poster:";

// Set to true only while the developer wants to edit text in the browser.
const EDITING_ENABLED = false;

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
  return (
    <Tag
      contentEditable={EDITING_ENABLED}
      suppressContentEditableWarning
      className={`rounded-sm outline-none transition-colors ${
        EDITING_ENABLED ? "focus:bg-rose-gold/10" : "cursor-default"
      } ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}
