import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

export type ExternalLinkProps = {
  label: string;
  url: string;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({ label, url }) => {
  return (
    <li>
      <Link href={url} target="_blank" passHref>
          <dt className="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50">
            <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500">
              <FontAwesomeIcon icon={faLink} className="h-5 w-5" />
            </div>
            <div className="w-full flex-grow min-w-0">
              <p className="font-medium text-sm leading-6 text-gray-900">{label}</p>
            </div>
          </dt>
      </Link>
    </li>
  );
};