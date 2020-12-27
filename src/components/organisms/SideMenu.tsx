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
    <div className="sticky top-0 md:h-screen p-3 flex flex-col">
      <MenuTitle onClickTitle={() => onClickMenu("/")} />
      <div className="flex flex-col items-start mt-20">
        <button className="w-full font-bold my-2 text-left hover:text-gray-500 focus:outline-none">TOP</button>
        <button
          onClick={() => setOpen(!isOpen)}
          className="w-full font-bold my-2 text-left hover:text-gray-500 focus:outline-none"
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
          <div className="w-full mb-5">
            <ol>
              <li>
                <button
                  onClick={() => onClickMenu("/monthSummary")}
                  className="w-full font-bold hover:text-gray-500 focus:outline-none"
                >
                  2021/01
                </button>
              </li>
              <li className="mt-2">
                <button className="w-full font-bold hover:text-gray-500 focus:outline-none">2021/02</button>
              </li>
              <li className="mt-2">
                <button className="w-full font-bold hover:text-gray-500 focus:outline-none">2021/03</button>
              </li>
              <li className="mt-2">
                <button className="w-full font-bold hover:text-gray-500 focus:outline-none">2021/04</button>
              </li>
            </ol>
          </div>
        </Transition>

        <button
          onClick={() => onClickMenu("/ranking")}
          className="w-full font-bold my-2 text-left hover:text-gray-500 focus:outline-none"
        >
          RANKING
        </button>
        <button
          onClick={() => onClickMenu("/cancelList")}
          className="w-full font-bold my-2 text-left hover:text-gray-500 focus:outline-none"
        >
          CANCEL LIST
        </button>
      </div>
    </div>
  );
};
