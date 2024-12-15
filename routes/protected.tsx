import { PageHeader } from "$components/PageHeader.tsx";

export default function Protected() {
  return (
    <PageHeader
      title="Protected Route"
      subtitle="You have reached the protected route which is only visible to authenticated users."
    />
  );
}
