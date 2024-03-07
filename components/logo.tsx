import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/fiango-light.svg"
        height="40"
        width="40"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/fiango-dark.svg"
        height="40"
        width="40"
        alt="Logo"
        className="hidden dark:block"
      />
    </div>
  );
};

export default Logo;
