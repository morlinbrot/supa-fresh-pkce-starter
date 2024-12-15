import { PageHeader } from "$components/PageHeader.tsx";

export default function Home() {
  return (
    <>
      <PageHeader
        title="Supa Fresh Boiler"
        subtitle="Boilerplate for a Deno Fresh web app with Supabase SSR authentication and Tailwind + DaisyUI styling."
      />
      <div class="flex justify-left">
        <a href="https://fresh.deno.dev">
          <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge.svg" alt="Made with Fresh" />
        </a>
      </div>
    </>
  );
}
