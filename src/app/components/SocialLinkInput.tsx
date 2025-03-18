import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type SocialLinkInputProps = {
  label: string;
  icon: IconProp;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export const SocialLinkInput: React.FC<SocialLinkInputProps> = ({
  label,
  icon,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="my-4 md:my-0">
      <label htmlFor={label.toLowerCase()} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
          <FontAwesomeIcon icon={icon} className="w-5 h-5" />
        </span>
        <input
          type="search"
          name={label.toLowerCase()}
          id={label.toLowerCase()}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};