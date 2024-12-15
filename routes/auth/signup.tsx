import { PageHeader } from "$components/PageHeader.tsx";
import { AuthForm, AuthFormMode } from "$islands/AuthForm.tsx";

export default function Signup() {
  return (
    <>
      <PageHeader title="Sign Up" />
      <AuthForm mode={AuthFormMode.Up} />
    </>
  );
}
