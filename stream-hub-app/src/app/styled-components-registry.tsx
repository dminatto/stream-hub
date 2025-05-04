// app/lib/registry.tsx (or your chosen path)
"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Lazily initialize StyleSheet instance
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // **Crucially, clear the styles after retrieving them.**
    // This prevents the sheet instance from being considered "consumed"
    // if the hook were somehow triggered again unexpectedly within the same request lifecycle.
    // Note: styledComponentsStyleSheet.instance.clearTag is not a standard method.
    // Instead, the pattern relies on useServerInsertedHTML running once per render pass.
    // The error usually indicates a structural problem or reuse issue,
    // but let's ensure we return the styles correctly.

    // The primary fix isn't clearing, but ensuring correct setup and no reuse.
    // However, getting the styles is the key action here.
    return <>{styles}</>;
  });

  // Render the children wrapped in StyleSheetManager ONLY on the server.
  // On the client, typeof window will be "object", so we just return children.
  // The styles will already be in the <head> from the server render.
  if (typeof window !== "undefined") {
    return <>{children}</>;
  }

  // During Server-Side Rendering:
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
