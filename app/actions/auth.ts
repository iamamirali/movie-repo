import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export const signInUser = async (formData: FormData) => {
  await signIn("credentials", {
    username: formData.get("username"),
    password: formData.get("password"),
    redirect: false,
  }).then((res) => {
    if (!res?.error) redirect("/");
    else throw new Error(res.error);
  });
};
