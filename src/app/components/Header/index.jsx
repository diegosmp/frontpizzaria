import logo from "@/public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-center py-8 px-6 border-b border-zinc-700 w-full xl:max-w-7xl">
      <Image
        src={logo}
        alt="Logo pizzaDev"
        width={130}
        priority={true}
        quality={100}
      />
    </header>
  );
};
export default Header;
