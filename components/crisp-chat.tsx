"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("297b92b3-721a-434a-a350-284ddc13d05f");
  }, []);

  return null;
};
