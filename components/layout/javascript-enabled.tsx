"use client";

import { useEffect } from "react";

export function JavaScriptEnabled() {
  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  return null;
}
