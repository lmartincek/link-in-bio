"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { decodeData } from "../../utils/transformer";
import { TemplateSimple } from "../components/TemplateSimple";

const DynamicPage = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const [decodedData, setDecodedData] = useState<any>(null);

  useEffect(() => {
    if (!data) return;
    setDecodedData(decodeData(data));
  }, [data]);

  if (!decodedData) {
    return <Loader />;
  }

  return <TemplateSimple acc={decodedData} />;
};

const Loader = () => (
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <svg
      className="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </div>
);

export default DynamicPage;
