import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Main content */}
      <main>{children}</main>
    </div>
  );
}
