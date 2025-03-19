import React from "react";
import { TemplateSimple } from "./TemplateSimple";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type Props = {
  data: object;
  handlePrefillDemoData:() => void
  handlePublish: () => void
};

export const Preview: React.FC<Props> = ({ data, handlePrefillDemoData, handlePublish }) => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="h-[729px] w-[340px] overflow-y-auto rounded-[3rem] ring-8 ring-slate-800 overflow-hidden relative">
        <TemplateSimple acc={data} />
        <div className="border-t bg-white flex items-center absolute bottom-0 w-full flex justify-center">
            <button
              onClick={handlePrefillDemoData}
              className="h-12 flex items-center space-x-2 px-4 border-r text-xs bg-white text-slate-700"
            >
              <span> Add demo data </span>
              <FontAwesomeIcon icon={faCode} className="h-4 w-4" />
            </button>
            <button
              onClick={handlePublish}
              className="h-12 flex items-center space-x-2 px-4 border-r text-xs bg-white text-slate-700"
            >
              <span> Publish </span>
              <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
            </button>
            <Link
              href="https://github.com/lmartincek/link-in-bio"
              target="_blank"
              className="h-12 flex items-center space-x-2 px-4 text-xs bg-white text-slate-700"
            >
              <span> Github </span>
              <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
            </Link>
          </div>
      </div>
    </div>
  );
};