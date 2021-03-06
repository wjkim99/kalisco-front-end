import React, { useLayoutEffect, useState } from "react";
import { useMobileCheck } from "../../utils/mobile";
import DesktopAgreement from "../../components/register/Agreement";
import MobileAgreement from "../../pages/mobile/Agreement";

export default function AgreementPage() {
  const [width, setWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth(e.target.innerWidth);
    });

    return () => {
      window.addEventListener("resize", (e) => {
        setWidth(e.target.innerWidth);
      });
    };
  }, []);

  return useMobileCheck(width) ? <DesktopAgreement /> : <MobileAgreement />;
}
