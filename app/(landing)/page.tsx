import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      Landing Page (unprotected)
      <div>
        <Link href={"/login"}>
          <Button>
            Login
          </Button>
        </Link>
        <Link href={"/register"}>
          <Button>
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
