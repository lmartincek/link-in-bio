'use client'
import React, { useCallback, useState } from "react";
import { encodeData } from "../utils/transformer";
import { Profile } from "./components/Profile";
import { SocialLinksForm } from "./components/SocialLinks";
import { LinksForm } from "./components/Links";
import { Preview } from "./components/Preview";

export type ExternalLinksShort = {
  id: number,
  l: string, // label
  u: string, // url
}

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
  ls: ExternalLinksShort[]; // Links
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
      n: "Nick Tesla",
      d: "Invented Wi-Fi before Wi-Fi was cool. Gave free electricity to pigeons.",
      i: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/440px-N.Tesla.JPG",
      f: "https://www.facebook.com/nick_tesla",
      t: "https://twitter.com/nick_tesla",
      ig: "https://www.instagram.com/nick_tesla",
      e: "lightninglord@acdc.com",
      gh: "https://github.com/nick_tesla",
      tg: "https://t.me/nick_tesla",
      w: "+1234567890",
      y: "https://youtube.com/@nick_tesla",
      l: "https://linkedin.com/in/nick_tesla",
      ls: [
        {
          id: 1,
          l: "My Free Energy Fundraiser",
          u: "https://freeenergyforeveryone.com",
        },
        {
          id: 2,
          l: "How to Zap Your Enemies (Ethically)",
          u: "https://en.wikipedia.org/wiki/Nikola_Tesla",
        },
        {
          id: 3,
          l: "Why Edison Owes Me Money",
          u: "https://acvsedison.com",
        },
        {
          id: 4,
          l: "Wireless Electricity Project (Not a Scam)",
          u: "https://madscience.org",
        },
        {
          id: 5,
          l: "Pigeons > People: My Memoir",
          u: "https://teslacoilpress.com",
        },
      ],
    });
  };

  const publish = () => {
    const url = `${window.location.origin}/1?data=${encodeData(data)}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard, now you can paste it to new tab and see your template");
    });
  };

  const onUpdateModelValue = useCallback((value: ExternalLinksShort[]) => {
    setData((prevData) => ({ ...prevData, ls: value }));
  }, []);

  return (
    <div className="h-screen md:grid md:grid-cols-3 divide-x">
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
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
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
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
          <LinksForm
            modelValue={data.ls}
            onUpdateModelValue={onUpdateModelValue}
          />
        </div>
      </div>
      <Preview 
          data={data} 
          handlePrefillDemoData={prefillDemoData}
          handlePublish={publish}
           />
    </div>
  );
};