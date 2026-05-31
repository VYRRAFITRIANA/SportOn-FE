"use client";

import Button from "@/app/(landing)/components/UI/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const { push } = useRouter();
    return (
        <main className="bg-[#F7F9FA] w-full min-h-screen flex items-center justify-center">
            <div className="max-w-136 w-md bg-white rounded-xl border-t-4 border-primary p-12 py-4">
                <Image src="/images/logo-admin.svg" alt="Logo" width={215} height={36} className="mx-auto mb-4 mt-6"/> 
                <p className="opacity-50 text-sm text-center mb-5">Enter your credentials to access the dashboard</p>
                <div className="input-group-admin mb-5">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Please Type Your Email" />
                </div>
                <div className="input-group-admin mb-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="••••••••••••••••••••" />
                </div>
                <Button size="small" className="w-full rounded-md  hover:bg-primary/90 mb-8 mt-5" onClick={() => push("/admin/products")}>
                    Sign In
                </Button>
            </div>
        </main>
    );
}
export default LoginPage;