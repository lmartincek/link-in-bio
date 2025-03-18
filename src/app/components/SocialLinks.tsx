import React from "react";
import { SocialLinkInput } from "./SocialLinkInput";
import { FormSection } from "./FormSection";

import { faFacebook, faInstagram, faTelegram, faTwitter, faWhatsapp, faYoutube, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Props = {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  github: string;
  telegram: string;
  whatsapp: string;
  youtube: string;
  email: string;
  onUpdateFacebook: (value: string) => void;
  onUpdateTwitter: (value: string) => void;
  onUpdateInstagram: (value: string) => void;
  onUpdateLinkedin: (value: string) => void;
  onUpdateGithub: (value: string) => void;
  onUpdateTelegram: (value: string) => void;
  onUpdateWhatsapp: (value: string) => void;
  onUpdateYoutube: (value: string) => void;
  onUpdateEmail: (value: string) => void;
};

export const SocialLinksForm: React.FC<Props> = ({
  facebook,
  twitter,
  instagram,
  linkedin,
  github,
  telegram,
  whatsapp,
  youtube,
  email,
  onUpdateFacebook,
  onUpdateTwitter,
  onUpdateInstagram,
  onUpdateLinkedin,
  onUpdateGithub,
  onUpdateTelegram,
  onUpdateWhatsapp,
  onUpdateYoutube,
  onUpdateEmail,
}) => {
  return (
    <FormSection title="Social Links" description="Add some social media links" defaultSlot={
    <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="md:grid grid-cols-1 gap-8 bg-white px-4 py-5 sm:p-6">
          <SocialLinkInput
            label="Facebook"
            icon={faFacebook}
            value={facebook}
            placeholder="https://fb.com/yourname"
            onChange={onUpdateFacebook}
          />
          <SocialLinkInput
            label="Twitter"
            icon={faTwitter}
            value={twitter}
            placeholder="https://twitter.com/youraccount"
            onChange={onUpdateTwitter}
          />
          <SocialLinkInput
            label="Instagram"
            icon={faInstagram}
            value={instagram}
            placeholder="https://instagram.com/youraccount"
            onChange={onUpdateInstagram}
          />
          <SocialLinkInput
            label="Github"
            icon={faGithub}
            value={github}
            placeholder="https://github.com/youraccount"
            onChange={onUpdateGithub}
          />
          <SocialLinkInput
            label="Telegram"
            icon={faTelegram}
            value={telegram}
            placeholder="https://t.me/youraccount"
            onChange={onUpdateTelegram}
          />
          <SocialLinkInput
            label="Linkedin"
            icon={faLinkedin}
            value={linkedin}
            placeholder="https://linkedin.com/youraccount"
            onChange={onUpdateLinkedin}
          />
          <SocialLinkInput
            label="Email"
            icon={faEnvelope}
            value={email}
            placeholder="elonmusk@geemail.com"
            onChange={onUpdateEmail}
          />
          <SocialLinkInput
            label="Youtube"
            icon={faYoutube}
            value={youtube}
            placeholder="https://youtube.com/youraccount"
            onChange={onUpdateYoutube}
          />
          <SocialLinkInput
            label="Whatsapp"
            icon={faWhatsapp}
            value={whatsapp}
            placeholder="+421 234 567 891"
            onChange={onUpdateWhatsapp}
          />
        </div>
      </div>
    } />
  );
};