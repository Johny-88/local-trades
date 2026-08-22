"use client";

import { useState } from "react";
import { ServiceQuoteModal } from "./ServiceQuoteModal";

export function OtherLocationServiceButton({ locationName }: { locationName: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="area-pill"
        onClick={() => setOpen(true)}
        style={{
          fontFamily: "inherit",
          cursor: "pointer",
        }}
      >
        Other services in {locationName}
      </button>

      <ServiceQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
