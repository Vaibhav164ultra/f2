import * as React from "react";
export type ThemeMode = "auto" | "light" | "dark";
export function useShadcnTheme(theme: ThemeMode) {
  const [resolved, setResolved] = React.useState<"light" | "dark">("light");
  React.useEffect(() => {
    if (theme !== "auto") { setResolved(theme); return; }
    const update = () => setResolved(document.documentElement.classList.contains("dark") ? "dark" : "light");
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [theme]);
  return resolved === "dark"
    ? { primaryColor: "#24c7d9", mutedColor: "#d8def0" }
    : { primaryColor: "#4f46e5", mutedColor: "#17213d" };
}
