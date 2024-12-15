import { User } from "@supabase/supabase-js";

import { ServerMessage } from "$libs/messages.ts";

// Type of the `state` field of `FreshContext`.
// Will be passed to pages as part of the `PageProps<ServerState>`, accessible as `props.state`.
export type ServerState = {
  // The `User` object returned by Supabase.
  user: User | null;
  // Messages (and errors) to be displayed to the user.
  message: ServerMessage | null;
};

type BaseRoute = {
  path: string;
  name: string;
};

type MainRoute = BaseRoute & {
  subroutes?: Record<string, BaseRoute>;
  isRoot?: boolean;
};

export type RouteMap = Record<string, MainRoute>;
