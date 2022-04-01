import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ href, as, children, ...props }) {
  const { asPath } = useRouter();
  const currentPath = asPath;
  const targetPath = as || href;
  const isActive = targetPath === currentPath;
  const child = React.Children.only(children);
  const className = ((isActive ? 'link-active ' : '') + (props?.className || '')).trim();
  return (
    <Link href={href} as={as} {...props}>
      {React.cloneElement(child, { className: className || null })}
    </Link>
  );
}