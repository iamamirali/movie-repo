import Link from "next/link";
import { RiMovie2Line } from "react-icons/ri";
import { IconButton } from "../button";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export const Header = (): JSX.Element => {
  return (
    <header className="h-12 p-4 bg-neutral-900 w-full flex items-center justify-between">
      <Link className="flex" href="/">
        <RiMovie2Line className="text-yellow-400 text-2xl" />
        <span className="text-base font-bold">MovieRepo</span>
      </Link>

      <div className="flex gap-4">
        <IconButton Icon={FiSearch} />
        <IconButton Icon={FaUserCircle} />
      </div>
    </header>
  );
};
