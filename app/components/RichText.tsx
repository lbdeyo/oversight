type RichTextProps = {
  children: string;
};

const MARKUP_PATTERN = /(\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

const linkClassName =
  "text-inherit underline transition-colors duration-200 hover:text-amber-400";

/** Renders `*italic*` segments and `[label](url)` links in body copy. */
export default function RichText({ children }: RichTextProps) {
  const parts = children.split(MARKUP_PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={index} className="italic">
              {part.slice(1, -1)}
            </em>
          );
        }

        const linkMatch = part.match(LINK_PATTERN);
        if (linkMatch) {
          const [, label, href] = linkMatch;
          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              {label}
            </a>
          );
        }

        return part;
      })}
    </>
  );
}
