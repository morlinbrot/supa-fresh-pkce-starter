import type { RouteMap } from "./types.ts";

export const routes: RouteMap = {
  home: {
    path: "/",
    name: "Home",
    // `root` will not be rendered by `NavBar but instead used to have a clickable home icon.
    isRoot: true,
  },
  // See the plugin config in `fresh.config.ts` on how to whitelist a route.
  about: {
    path: "/about",
    name: "About",
  },
  protected: {
    path: "/protected",
    name: "Protected",
  },
};
