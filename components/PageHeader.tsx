export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <hgroup class="mb-8">
      <h1 class="mb-4 mt-12">{title}</h1>
      {subtitle && <p class="mt-0">{subtitle}</p>}
    </hgroup>
  );
}
