import React from "react";
import Image from "next/image";
import { ExternalLink } from "./ExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTelegram, faTwitter, faWhatsapp, faYoutube, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Account = {
  i?: string; // Image URL
  n?: string; // Name
  d?: string; // Description
  f?: string; // Facebook URL
  t?: string; // Twitter URL
  ig?: string; // Instagram URL
  tg?: string; // Telegram URL
  w?: string; // WhatsApp number
  y?: string; // YouTube URL
  e?: string; // Email
  gh?: string; // GitHub URL
  l?: string; // LinkedIn URL
  ls?: Array<{ l: string; u: string }>; // External links
};

type Props = {
  acc: Account;
};

export const TemplateSimple: React.FC<Props> = ({ acc }) => {
  const allSocialLinksAreEmpty =
    !acc.f &&
    !acc.t &&
    !acc.ig &&
    !acc.tg &&
    !acc.w &&
    !acc.y &&
    !acc.e &&
    !acc.gh &&
    !acc.l;

  return (
    <main className="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
      <div className="text-center">
        {acc.i && (
          <div className="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto">
            <Image src={acc.i} width={50} height={50} alt="name" className="h-full w-full object-cover" />
          </div>
        )}
        {acc.n && <h1 className="text-2xl font-bold mt-4 text-slate-800">{acc.n}</h1>}
        {acc.d && <p className="text-sm mt-2 text-slate-600">{acc.d}</p>}
      </div>

      {!allSocialLinksAreEmpty && (
        <div className="flex items-center justify-center flex-wrap">
          {acc.f && (
            <span className="p-1">
              <a href={acc.f} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.t && (
            <span className="p-1">
              <a href={acc.t} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.ig && (
            <span className="p-1">
              <a href={acc.ig} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.tg && (
            <span className="p-1">
              <a href={acc.tg} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.w && (
            <span className="p-1">
              <a href={`https://wa.me/${acc.w}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.y && (
            <span className="p-1">
              <a href={acc.y} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.e && (
            <span className="p-1">
              <a href={`mailto:${acc.e}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.gh && (
            <span className="p-1">
              <a href={acc.gh} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.l && (
            <span className="p-1">
              <a href={acc.l} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
            </span>
          )}
        </div>
      )}

      <ul className="space-y-2">
        {acc.ls?.map((link, id) => (
          <ExternalLink key={id} label={link.l} url={link.u} />
        ))}
      </ul>
    </main>
  );
};