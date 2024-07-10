import { Heart } from "lucide-react";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center h-screen w-full">
        <div className="bg-[#FF2157] rounded-md w-10 h-10 p-5 items-center justify-center">
          <Heart className="text-white fill-white" />
        </div>
      </div>
    </>
  );
};

export default Login;
