import { setCookie } from "$std/http/cookie.ts";
import { assert } from "$std/assert/assert.ts";
import { createServerClient, parseCookieHeader } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

function getEnvVars() {
  const env = {
    SUPABASE_URL: Deno.env.get("SUPABASE_URL")!,
    SUPABASE_ANON_KEY: Deno.env.get("SUPABASE_ANON_KEY")!,
    SUPABASE_SERVICE_ROLE_KEY: Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  };

  assert(
    env.SUPABASE_URL && env.SUPABASE_ANON_KEY && env.SUPABASE_SERVICE_ROLE_KEY,
    "SUPABASE URL, SUPABASE_ANON_KEY, and SUPABASE_SERVICE_ROLE_KEY environment variables must be set.",
  );

  return env;
}

export function createSupabaseClient(req: Request, resHeaders = new Headers()) {
  const env = getEnvVars();
  return createServerClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
    auth: { flowType: "pkce" },
    cookies: {
      getAll() {
        return parseCookieHeader(req.headers.get("Cookie") ?? "");
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => setCookie(resHeaders, { name, value, ...options }));
      },
    },
  });
}

/**
 * CAREFUL, this can bypasses RLS, _never use this in client side code!_
 */
export function createSupabaseAdminClient() {
  const env = getEnvVars();
  return createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
}
