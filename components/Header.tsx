import { NavBar } from "$components/NavBar.tsx";
import { NavLink } from "$components/NavLink.tsx";

import type { RouteMap } from "../types.ts";
import { Link } from "$components/Link.tsx";

type Props = {
  routes: RouteMap;
  url: URL;
  loggedIn: boolean;
};

export function Header({ routes, url, loggedIn }: Props) {
  const signupButtProps = { href: "/api/signup", text: "Sign up" };
  const loginButtProps = loggedIn ? { href: "/api/logout", text: "Log Out" } : { href: "/auth/login", text: "Log In" };

  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <a href={Object.values(routes).find((route) => route.isRoot)?.path || ""} class="">
          <img src="/logo.svg" alt="logo" height="50" width="50" class="m-0" />
        </a>
      </div>

      <NavBar routes={routes} url={url} />

      <div class="navbar-end gap-4">
        <Link href={signupButtProps.href} class="no-underline">
          {signupButtProps.text}
        </Link>
        <NavLink href={loginButtProps.href}>{loginButtProps.text}</NavLink>
      </div>
    </div>
  );
}
