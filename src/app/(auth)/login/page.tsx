import { login } from "@/app/actions/login";
import Link from "next/link";

export default async function LoginPage({searchParams}: {searchParams: Promise<{ error?: string }>;}) {
  const params = await searchParams;
  const error = params.error;
  console.log(error);
  return (
    <div className="login-page py-16">
        <div className="page-container">
            <div className="max-w-2xl mx-auto">
                <h1>Login</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form className="login-form" action={login} method="POST">
                    <input className="login-input" type="email" placeholder="Email" required name="email" />
                    <input className="login-input" type="password" placeholder="Password" required name="password" />
                    <button className="login-button" type="submit">Login</button>
                    <p className="login-register-link">Don't have an account? <Link href="/register">Register</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}