"use client"

import { useForm } from "react-hook-form"
import Input from "postcss/lib/input";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { fetchData } from "@/library/db";
import { redirect } from "next/navigation";

const CredentialsForm = () => {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        // console.log(data)
        const signinResponse = await signIn("credentials", {
            username: data.username,
            password: data.password,
            redirect: false
        })
        // console.log("signinResponse", signinResponse)
        // // if (signinResponse.ok) {
        router.push("/")
        // }

    }

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username: </label>
                    <input type="text" {...register("username", { required: true })} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password"{...register("password", { required: true })} />
                </div>
                <Button
                    variant={"default"}
                    className="w-full"
                    type="submit"
                >
                    Login
                </Button>
            </form>
        </>

    );
};

export default CredentialsForm;