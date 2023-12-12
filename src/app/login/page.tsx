import Auth from "@/components/forms/auth/Auth";
import LoginForm from "@/components/forms/login-form/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <LoginForm />
        <Auth type="login" />
      </div>
    </main>
  );
}
