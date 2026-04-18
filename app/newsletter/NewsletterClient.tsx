"use client";

import { useEffect } from "react";

const HUBSPOT_EMBED_SRC = "https://js-na2.hsforms.net/forms/embed/244639378.js";

export default function NewsletterClient() {
  useEffect(() => {
    if (document.querySelector(`script[src="${HUBSPOT_EMBED_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = HUBSPOT_EMBED_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div>
        <h1
          className="text-6xl sm:text-[4.6875rem] md:text-[5.625rem] lg:text-[7.5rem] tracking-wide text-amber-400 uppercase"
          style={{
            fontFamily: '"thunderhouse-pro", sans-serif',
            fontWeight: 400,
          }}
        >
          <span className=" px-2 py-1 inline-block">Newsletter</span>
        </h1>
        <p className="mt-4 text-[2.5rem] text-orange-400">
          <span className=" px-2 py-1 inline-block">
            Sign up for news and updates about Oversight.
          </span>
        </p>
      </div>

      <div className="oversight-hs-form rounded-lg border border-gray-800 bg-black/80 p-6 sm:p-8 backdrop-blur-sm shadow-lg shadow-black/40">
        <div
          className="hs-form-frame"
          data-region="na2"
          data-form-id="ac3375d6-9f61-4ce3-b2c7-d9225aa487c3"
          data-portal-id="244639378"
        />
      </div>
    </div>
  );
}
