import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  {...(link.startsWith("/") ? {} : { target: "_blank", rel: "noreferrer noopener" })}
                  className="flex flex-row items-center my-[15px]"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 mb-2 w-full border-t border-white/10 pt-6 flex flex-col items-center gap-2 text-center">
          <p className="text-[13px] text-gray-400">
            <span className="text-white font-medium">BLOCKMEN</span> &mdash;
            A-1004, Rama Metro Life Maxima, Tathawade, Pune – 411033,
            Maharashtra, India
          </p>
          <p className="text-[13px] text-gray-400">
            <a
              href="mailto:hello@blockmen.io"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              hello@blockmen.io
            </a>
            &nbsp;&bull;&nbsp;
            <a
              href="https://www.theblockmen.com"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              www.theblockmen.com
            </a>
          </p>
          <p className="text-[13px] text-gray-500 mt-1">
            &copy; BLOCKMEN {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
