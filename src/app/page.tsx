'use client'
import React, { useState } from "react";
import Link from "next/link";
import { encodeData } from "../utils/transformer";
import { Profile } from "./components/Profile";
import { SocialLinksForm } from "./components/SocialLinks";
// import { LinksForm } from "./components/Links";
import { Preview } from "./components/Preview";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type Data = {
  n: string; // Name
  d: string; // Description
  i: string; // Image URL
  f: string; // Facebook
  t: string; // Twitter
  ig: string; // Instagram
  gh: string; // GitHub
  tg: string; // Telegram
  l: string; // LinkedIn
  e: string; // Email
  w: string; // WhatsApp
  y: string; // YouTube
  ls: Array<{ id: number, l: string; i?: string; u: string }>; // Links
};

export default function Page() {
  const [data, setData] = useState<Data>({
    n: "",
    d: "",
    i: "",
    f: "",
    t: "",
    ig: "",
    gh: "",
    tg: "",
    l: "",
    e: "",
    w: "",
    y: "",
    ls: [],
  });

  const prefillDemoData = () => {
    setData({
      n: "John Snow",
      d: "I’m John Snow, the king in the north. I know Nothing.",
      i: "https://i.insider.com/56743fad72f2c12a008b6cc0",
      f: "https://www.facebook.com/john_snow",
      t: "https://twitter.com/john_snow",
      ig: "https://www.instagram.com/john_snow",
      e: "mail@john_snow.cc",
      gh: "https://github.com/john_snow",
      tg: "https://t.me/john_snow",
      w: "+918888888888",
      y: "https://youtube.com/@john_snow",
      l: "https://linkedin.com/john_snow",
      ls: [
        {
          id: 1,
          l: "My Website",
          i: "ph:globe-duotone",
          u: "https://example.com",
        },
        {
          id: 2,
          l: "Amazon wishlist",
          i: "ant-design:amazon-outlined",
          u: "https://amazon.in",
        },
        {
          id: 3,
          l: "React JS course",
          i: "grommet-icons:reactjs",
          u: "https://reactjs.org/",
        },
        {
          id: 4,
          l: "Donate for our cause",
          i: "iconoir:donate",
          u: "https://who.int",
        },
        {
          id: 5,
          l: "Download my resume",
          i: "ph:file-pdf",
          u: "https://google.com",
        },
      ],
    });
  };

  const publish = () => {
    const url = `${window.location.origin}/1?data=${encodeData(data)}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard");
    });
  };

  return (
    <div className="h-screen grid grid-cols-3 divide-x">
      <div className="col-span-2 h-screen flex flex-col bg-slate-100">
        <div className="flex-1 overflow-y-auto p-8">
          <Profile
            name={data.n}
            desc={data.d}
            image={data.i}
            onUpdateName={(value) => setData({ ...data, n: value })}
            onUpdateDesc={(value) => setData({ ...data, d: value })}
            onUpdateImage={(value) => setData({ ...data, i: value })}
          />
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
          <SocialLinksForm
            facebook={data.f}
            twitter={data.t}
            instagram={data.ig}
            github={data.gh}
            telegram={data.tg}
            linkedin={data.l}
            email={data.e}
            whatsapp={data.w}
            youtube={data.y}
            onUpdateFacebook={(value) => setData({ ...data, f: value })}
            onUpdateTwitter={(value) => setData({ ...data, t: value })}
            onUpdateInstagram={(value) => setData({ ...data, ig: value })}
            onUpdateGithub={(value) => setData({ ...data, gh: value })}
            onUpdateTelegram={(value) => setData({ ...data, tg: value })}
            onUpdateLinkedin={(value) => setData({ ...data, l: value })}
            onUpdateEmail={(value) => setData({ ...data, e: value })}
            onUpdateWhatsapp={(value) => setData({ ...data, w: value })}
            onUpdateYoutube={(value) => setData({ ...data, y: value })}
          />
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>          
          {/* <LinksForm
            modelValue={data.ls}
            onUpdateModelValue={(value) => setData({ ...data, ls: value })}
          /> */}
        </div>
        <div className="border-t bg-white flex items-center">
          <button
            onClick={prefillDemoData}
            className="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
          >
            <span> Add demo data </span>
            <FontAwesomeIcon icon={faCode} className="h-4 w-4" />
          </button>
          <button
            onClick={publish}
            className="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
          >
            <span> Publish </span>
            <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
          </button>
          <Link
            href="https://github.com/lmartincek/onelink"
            target="_blank"
            className="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
          >
            <span> Github </span>
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <Preview data={data} />
    </div>
  );
};