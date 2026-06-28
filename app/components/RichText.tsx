type RichTextProps = {
  children: string;
};

/** Renders `*italic*` segments as <em>. For play, book, and film titles in body copy. */
export default function RichText({ children }: RichTextProps) {
  const parts = children.split(/(\*[^*]+\*)/g);

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

        return part;
      })}
    </>
  );
}
