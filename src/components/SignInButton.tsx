"use client";

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { toSafeInteger } from "lodash";
import { signIn } from "next-auth/react";

interface SignInButtonProps {}

const SingInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      // toast({
      //   title: "Error signing in",
      //   message: "Please try again later",
      //   type: "error",
      // });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SingInButton;
