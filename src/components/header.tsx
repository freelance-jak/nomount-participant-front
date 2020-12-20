import Image from "next/image";
import Link from "next/link";

const items = [
  { href: "/", label: "TOP" },
  { href: "/meet", label: "MEET" },
  { href: "/ranking", label: "RANKING" },
  { href: "/cancel", label: "CANCEL LIST" },
];

export const Header = () => {
  return (
    <header className="p-8 sticky top-0 left-0 h-screen w-44 ">
      <div className="flex flex-col h-full">
        <h1 className="mb-8">
          <Image src="/nomountmeet_logo.png" width={171.46} height={72} />
        </h1>
        <nav>
          {items.map(({ href, label }) => {
            return (
              <Link key={href} href={href}>
                <a style={{ display: "inline-block", padding: 12 }}>{label}</a>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto">
          <ul className="flex">
            <li>
              <Link href="/">
                <a>
                  <Image src="/git_icon.png" width={22} height={22} />
                </a>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/">
                <a>
                  <Image src="/icon_connpas.png" width={22} height={22} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
