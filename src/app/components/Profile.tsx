import React from "react";
import { FormSection } from "./FormSection";

type Props = {
  name: string;
  desc: string;
  image: string;
  onUpdateName: (value: string) => void;
  onUpdateDesc: (value: string) => void;
  onUpdateImage: (value: string) => void;
};

export const Profile: React.FC<Props> = ({
  name,
  desc,
  image,
  onUpdateName,
  onUpdateDesc,
  onUpdateImage,
}) => {
  return (
    <FormSection
      title="Profile"
      description="Some public information about you">
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="search"
                name="name"
                id="name"
                autoComplete="given-name"
                placeholder="Your name"
                value={name}
                onChange={(e) => onUpdateName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                About yourself
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400"
                  placeholder="I am a content creator and I do..."
                  maxLength={100}
                  value={desc}
                  onChange={(e) => onUpdateDesc(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="flex-grow col-span-6 sm:col-span-3">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo Url
              </label>
              <input
                type="search"
                name="photo"
                id="photo"
                placeholder="https://myimage.url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={image}
                onChange={(e) => onUpdateImage(e.target.value)}
              />
            </div>
          </div>
        </div>
    </FormSection>
  );
};