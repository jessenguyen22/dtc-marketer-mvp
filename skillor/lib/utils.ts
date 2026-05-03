// Tailwind class merger — adopted shadcn convention without pulling shadcn yet.
// Keeps clsx + tailwind-merge optional for now (we'll add when we add shadcn components).

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
