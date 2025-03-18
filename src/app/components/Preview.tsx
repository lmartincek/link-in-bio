import React from "react";
import { TemplateSimple } from "./TemplateSimple";

type Props = {
  data: object;
};

export const Preview: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="h-[729px] w-[340px] overflow-y-auto rounded-[3rem] ring-8 ring-slate-800 overflow-hidden">
        <TemplateSimple acc={data} />
      </div>
    </div>
  );
};