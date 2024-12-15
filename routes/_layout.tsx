import type { PageProps } from "$fresh/server.ts";

import { Header } from "$components/Header.tsx";
import { MessageAlert } from "$components/MessageAlert.tsx";

import type { ServerState } from "../types.ts";
import { routes } from "../app.config.ts";

export default function ({ Component, state, url }: PageProps<ServerState>) {
  const { message, user } = state as ServerState;
  return (
    <div class="px-4 py-8 mx-auto prose container">
      <Header routes={routes} url={url} loggedIn={!!user} />

      {message && <MessageAlert message={message} />}

      <Component />
    </div>
  );
}
