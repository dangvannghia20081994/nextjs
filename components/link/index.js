import { useRouter } from 'next/router';
import Link from 'next/link';
function NavLink({ href, exact = false, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  if (isActive) {
    if (!props.className) {
      props.className = ''
    }
    props.className += 'active';
  }
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}
export { NavLink };