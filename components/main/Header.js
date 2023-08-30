// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center xl:gap-y-6 xl:py-8 py-0">
          {/* logo */}
          <Link href="/">
            <h3 className="h3 mt-5">
              Krea<span className="font-thin"> tyf</span>
              <span className="text-accent">.</span>
            </h3>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
