"use client";
import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { cn } from "@/lib/utils";
import type { ThemeMode } from "./use-shadcn-theme";
export type SceneContainerProps = { children: React.ReactNode; className?: string; theme?: ThemeMode; environment?: "day" | "night"; camera?: [number, number, number]; fov?: number; };
export function SceneContainer({ children, className, environment="night", camera=[0,0,6], fov=42 }: SceneContainerProps) {
  return <div className={cn("relative isolate h-full w-full overflow-hidden", className)}>
    <Canvas dpr={[1,1.6]} camera={{position:camera,fov}} gl={{antialias:true,alpha:true,powerPreference:"high-performance"}}>
      <color attach="background" args={[environment === "night" ? "#10182d" : "#f6f3ec"]}/>
      <ambientLight intensity={environment === "night" ? .7 : 1}/>
      {children}
    </Canvas>
  </div>;
}
