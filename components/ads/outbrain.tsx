"use client";

import { useEffect } from "react";
import { useAdStore } from "../helper/ad-store";

const Outbrain = () => {
  const { outbrain } = useAdStore();

  useEffect(() => {

    if (outbrain !== 1) return;

    if (document.getElementById("outbrain")) return;

    document
      .querySelectorAll(
        window.innerWidth >= 1024 ? ".outbrain-mobile" : ".outbrain-desktop"
      )
      .forEach((ele: Element) => ele.remove());

    const reload = (
      window as unknown as { OBR?: { extern?: { reloadWidget?: () => void } } }
    ).OBR?.extern?.reloadWidget;
    if (reload) return reload();

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//widgets.outbrain.com/outbrain.js";
    document.body.appendChild(script);

     return () => {
      const el = document.getElementById("outbrain");
      if (el) document.body.removeChild(el);
    };
  }, [outbrain]);

  return null;
};

export default Outbrain;
