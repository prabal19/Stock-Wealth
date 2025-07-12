"use client";


import { useAdStore } from "./ad-store";
import { useEffect } from "react";

export function Provider({
  children,

}: {children:React.ReactNode}) {

  useEffect(() => {
    useAdStore.getState().fetchAdConfig();
  }, []);


  return <>{children}</>;
}
