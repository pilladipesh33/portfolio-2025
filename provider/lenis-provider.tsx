"use client";

import { ReactLenis } from "lenis/react";
import { FC, ReactNode, useRef } from "react";

interface LenisProviderProps {
  children: ReactNode;
}

export const LenisProvider: FC<LenisProviderProps> = ({ children }) => {
  const lenisRef = useRef(null);
  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
};
