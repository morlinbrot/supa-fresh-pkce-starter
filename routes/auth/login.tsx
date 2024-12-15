import { AuthForm, AuthFormMode } from "$islands/AuthForm.tsx";
import { PageHeader } from "$components/PageHeader.tsx";

export default function Login() {
  return (
    <>
      <PageHeader title="Log In" />
      <AuthForm mode={AuthFormMode.In} />
    </>
  );
}
