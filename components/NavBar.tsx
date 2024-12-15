import classNames from "classnames";

import type { RouteMap } from "../types.ts";

type Props = {
  routes: RouteMap;
  url: URL;
};

export function NavBar({ routes, url }: Props) {
  return (
    <nav class={"navbar-center gap-4"}>
      <ul class="menu menu-horizontal">
        {Object.values(routes)
          .filter((route) => !route.isRoot)
          .map(({ name, path }) => {
            const classes = classNames("no-underline", {
              active: url.pathname.includes(path),
            });
            return (
              <li>
                <a href={path} class={classes}>
                  {name.toLocaleUpperCase()}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
