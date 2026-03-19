import { register } from "@/app/actions/register";
import Link from "next/link";

export default async function RegisterPage({searchParams}: {searchParams: Promise<{ error?: string }>;}) {
  const params = await searchParams;
  const error = params.error;
  console.log(error);
  return (
    <div className="register-page py-16">
        <div className="page-container">
            <div className="max-w-2xl mx-auto">
                <h1>Register</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form className="register-form" action={register} method="POST">
                    <input className="register-input" type="email" placeholder="Email" required name="email" />
                    <input className="register-input" type="password" placeholder="Password" required name="password" />
                    <input className="register-input" type="password" placeholder="Confirm Password" required name="confirmPassword" />
                    <button className="register-button" type="submit">Register</button>
                </form>
                <p className="register-login-link">Already have an account? <Link href="/login">Login</Link></p>
            </div>
        </div>
    </div>
  )
}