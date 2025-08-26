import Link, { LinkProps } from "next/link";

import clsx from "clsx";

type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
  className?: string;
};

export default function NavLink({
  children,
  isFirst = false,
  className,
  ...props
}: NavLinkProps) {
  const baseClasses = clsx(
    "block text-xl py-1 border-b border-white hover:border-y hover:border-primary hover:text-primary transition duration-200 ease-in-out",
    {
      "border-t": isFirst,
      "hover:-mt-[1px]": !isFirst,
    },
    className
  );

  return (
    <Link
      className={baseClasses}
      {...props}
      role="navigation"
      aria-label={`Navigate to ${children}`}
    >
      {children}
    </Link>
  );
}
