import { RecoverForm, RecoverFormMode } from "$islands/RecoverForm.tsx";
import { PageHeader } from "$components/PageHeader.tsx";

export default function RecoveryPage() {
  return (
    <>
      <PageHeader title="Reset Password" subtitle="Enter your email address below to reset your password." />
      <RecoverForm mode={RecoverFormMode.Reset} />
    </>
  );
}
