import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { OAuthButtons } from "./oauth-signin";
import { Heart } from "lucide-react";

export default async function Login() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }

  return (
    <>
      <>
        <div className="flex flex-col gap-5 items-center justify-center h-screen w-full">
          <div className="bg-[#FF2157] rounded-md w-10 h-10 flex items-center justify-center">
            <Heart className="text-white fill-white w-5 h-5 " />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="font-inter font-semibold">Pickup line generator</p>
            <p className="font-inter font-extralight text-sm">
              Generate pickup line for your crush now!
            </p>
          </div>
          <form id="login-form" className="grid gap-4">
            <OAuthButtons />
          </form>
        </div>
      </>
    </>
  );
}
