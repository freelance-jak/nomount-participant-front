import { Transition } from "@headlessui/react";
import Router from "next/router";
import { useState } from "react";
import { MenuTitle } from "src/components/molecules/common/MenuTitle";

export const SideMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const onClickMenu = (path: string) => {
    Router.push(path);
  };

  return (
    <div className="sticky top-0 flex flex-col p-3 md:h-screen">
      <MenuTitle onClickTitle={() => onClickMenu("/")} />
      <div className="flex flex-col items-start mt-20">
        <button className="my-2 w-full text-left hover:text-gray-500 font-bold focus:outline-none">TOP</button>
        <button
          onClick={() => setOpen(!isOpen)}
          className="my-2 w-full text-left hover:text-gray-500 font-bold focus:outline-none"
        >
          MEET
        </button>
        <Transition
          className="w-full"
          show={isOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="mb-5 w-full">
            <ol>
              <li>
                <button
                  onClick={() => onClickMenu("/monthSummary")}
                  className="w-full hover:text-gray-500 font-bold focus:outline-none"
                >
                  2021/01
                </button>
              </li>
              <li className="mt-2">
                <button className="w-full hover:text-gray-500 font-bold focus:outline-none">2021/02</button>
              </li>
              <li className="mt-2">
                <button className="w-full hover:text-gray-500 font-bold focus:outline-none">2021/03</button>
              </li>
              <li className="mt-2">
                <button className="w-full hover:text-gray-500 font-bold focus:outline-none">2021/04</button>
              </li>
            </ol>
          </div>
        </Transition>

        <button
          onClick={() => onClickMenu("/ranking")}
          className="my-2 w-full text-left hover:text-gray-500 font-bold focus:outline-none"
        >
          RANKING
        </button>
        <button
          onClick={() => onClickMenu("/cancelList")}
          className="my-2 w-full text-left hover:text-gray-500 font-bold focus:outline-none"
        >
          CANCEL LIST
        </button>
      </div>
    </div>
  );
};
