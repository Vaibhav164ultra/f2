import React from "react";
import { createRoot } from "react-dom/client";
import Globe from "@/components/ui/globe";
const mount=document.getElementById("globe-react-mount");
if(mount) createRoot(mount).render(<React.StrictMode><Globe className="h-full w-full" dots={1200} speed={.45} size={.026} theme="light" environment="night"/></React.StrictMode>);
