// Wraps react-markdown with brutalist prose styling overrides for rendering
// a sample skill execution output. Server component (no client interaction).

import ReactMarkdown from "react-markdown";

export function SkillSampleOutputRenderer({ markdown }: { markdown: string }) {
  return (
    <div className="text-[var(--color-text-secondary)] leading-relaxed text-[15px]">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1
              className="font-display font-light tracking-tight text-foreground mt-0 mb-8 lowercase"
              style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1 }}
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mt-16 mb-6 pb-3 border-b border-[var(--color-border)]">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base text-foreground mt-10 mb-4 font-medium">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="my-4 max-w-3xl">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="my-4 space-y-2 list-none pl-0 max-w-3xl">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 space-y-2 list-decimal pl-6 max-w-3xl">
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => {
            const isUnordered = !("ordered" in props);
            return (
              <li className={isUnordered ? "flex gap-3" : ""}>
                {isUnordered ? (
                  <>
                    <span className="text-[var(--color-text-tertiary)] font-mono-ui shrink-0">
                      ▸
                    </span>
                    <span>{children}</span>
                  </>
                ) : (
                  children
                )}
              </li>
            );
          },
          strong: ({ children }) => (
            <strong className="text-foreground font-medium">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="text-foreground not-italic underline underline-offset-4 decoration-[var(--color-border-strong)]">
              {children}
            </em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 pl-6 border-l-2 border-[var(--color-border-strong)] text-[var(--color-text-tertiary)] italic max-w-3xl">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code
              className="font-mono-ui text-foreground bg-[var(--color-surface)] px-1.5 py-0.5"
              style={{ textTransform: "none", letterSpacing: "normal", fontSize: "0.9em" }}
            >
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre
              className="my-6 border border-[var(--color-border)] p-4 text-sm font-mono-ui whitespace-pre-wrap overflow-x-auto"
              style={{ textTransform: "none", letterSpacing: "normal" }}
            >
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto border border-[var(--color-border)]">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b border-[var(--color-border-strong)]">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="font-mono-ui text-xs text-[var(--color-text-tertiary)] text-left px-4 py-3">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 border-t border-[var(--color-border)] text-[var(--color-text-secondary)]">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="my-12 border-0 border-t border-[var(--color-border)]" />
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-foreground underline underline-offset-4 decoration-[var(--color-border-strong)] hover:decoration-foreground"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
