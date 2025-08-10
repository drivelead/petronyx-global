// src/components/petronyx/CookieNotice.tsx

"use client";

import React, { useState } from "react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleAccept = () => {
    setVisible(false);
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto pb-2">
        <div className="border-t border-zinc-200 bg-white text-black max-w-xl me-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-start sm:justify-between gap-4">
          <p className="text-sm text-zinc-700">
            We use cookies to enhance your browsing experience and analyse our
            traffic.
          </p>
          <div className="flex gap-3 shrink-0 ms-auto">
            <button
              onClick={handleReject}
              className="px-4 py-2 border border-zinc-300 text-sm font-medium hover:bg-zinc-50">
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 border border-zinc-300 bg-black text-white text-sm font-mediumhover:bg-zinc-50">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
