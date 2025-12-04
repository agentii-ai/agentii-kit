"use client";

import React, { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterKit } from "@/components/FooterKit";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Navbar spacing */}
      <div className="h-16" />

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <FooterKit />
    </div>
  );
}
