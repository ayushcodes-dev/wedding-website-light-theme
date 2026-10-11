"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [opacity, setOpacity] = useState("opacity-100");

  useEffect(() => {
    // Instant micro-fade to smoothly transition between pages without lag
    setOpacity("opacity-0");
    const timer = setTimeout(() => {
      setOpacity("opacity-100");
    }, 40);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`transition-opacity duration-300 ease-out ${opacity}`}>
      {children}
    </div>
  );
}
