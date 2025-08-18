import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/images/logo.png" alt="Logo" width={183} height={54} />
    </Link>
  );
};

export default Logo;
