"use client"

import { useForm } from "react-hook-form"
import { Button } from "./ui/button";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import SignUpDialog from "./SignUpDialog";
import { Input } from "./ui/input";


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
        router.push("/")
    }

    return (
        <div className="">
            <h1 className="flex justify-center">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="gap-4 w-96">
                <div className="pb-4">
                    <label className="text-sm uppercase ">Username</label>
                    <Input type="text" {...register("username", { required: true })} />
                </div>
                <div className="pb-4">
                    <label className="text-sm uppercase ">Password</label>
                    <Input type="password"{...register("password", { required: true })} />
                </div>
                <Button
                    variant={"default"}
                    className="w-full"
                    type="submit"
                >
                    Login
                </Button>
                <div className="flex justify-center my-3">
                    <SignUpDialog/>

                </div>
                
            </form>
        </div>

    );
};

export default CredentialsForm;