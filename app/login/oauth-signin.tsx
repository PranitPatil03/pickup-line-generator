/* eslint-disable react/jsx-key */
"use client";
import { Button } from "@/components/ui/button";
import { Provider } from "@supabase/supabase-js";
import { oAuthSignIn } from "./actions";
import { RiGoogleFill } from 'react-icons/ri';

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const oAuthProviders: OAuthProvider[] = [
    {
      name: "google",
      displayName: "Google",
      icon: <RiGoogleFill  className="size-5" />,
    },
  ];

  return (
    <>
      {oAuthProviders.map((provider) => (
        <Button
          className="w-full flex items-center justify-center gap-2 bg-[#FF2157] text-white"
          variant="ghost"
          onClick={async () => {
            await oAuthSignIn(provider.name);
          }}
        >
          {provider.icon}
          Login with {provider.displayName}
        </Button>
      ))}
    </>
  );
}
