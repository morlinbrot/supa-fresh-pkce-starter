import tailwind from "$fresh/plugins/tailwind.ts";
import { defineConfig } from "$fresh/server.ts";

import supabase from "@morlinbrot/fresh-plugin-supabase";

export default defineConfig({
  plugins: [
    tailwind(),
    supabase({
      allowPattern: new RegExp("^/(auth/(signup|login|confirm)|about)"),
      redirects: {
        forbidden: "auth/login",
      },
    }),
  ],
});
