import { JSX } from "preact";

import { Link } from "$components/Link.tsx";

export function NavLink(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return <Link {...props} class="btn btn-outline btn-accent no-underline" />;
}
