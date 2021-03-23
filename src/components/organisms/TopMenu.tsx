import { Transition } from "@headlessui/react";
import Router from "next/router";
import { useState } from "react";
import { MenuTitle } from "src/components/molecules/common/MenuTitle";

export const TopMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMeetOpen, setMeetOpen] = useState(false);

  const onClickMenu = (path: string) => {
    Router.push(path);
  };

  return (
    <div className="flex flex-row justify-between p-2">
      <MenuTitle onClickTitle={() => onClickMenu("/")} />
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center justify-center px-4 py-2 focus:outline-none"
      >
        Menu
        <svg
          className="-mr-1 ml-2 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Transition
        className="absolute right-0 mt-12 w-52 bg-white rounded-md shadow-lg ring-black ring-opacity-5 ring-1"
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="">
          <div className="py-3">
            <button onClick={() => setMeetOpen(!isMeetOpen)} className="px-4 py-2 w-full text-left text-sm">
              MEET
            </button>
            <button onClick={() => onClickMenu("/ranking")} className="block px-4 py-2 w-full text-left text-sm">
              RANKING
            </button>
            <button onClick={() => onClickMenu("/cancelList")} className="block px-4 py-2 w-full text-left text-sm">
              CANCEL LIST
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );

  return <div className="justify-between p-2">{<MenuTitle onClickTitle={() => onClickMenu("/")} />}</div>;
};
