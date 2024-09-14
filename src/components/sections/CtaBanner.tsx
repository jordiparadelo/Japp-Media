import { SectionTag } from "@/components/ui";

import React from "react";

function CtaBanner() {
  return (
    <section className="px-5 py-11 md:px-16 md:py-20">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-8">
        <div className="flex flex-col place-items-center gap-2">
          <h2 className="sr-only">Agenda una llamada gratuita</h2>
          <div className="flex min-w-[10ch] flex-col gap-1 place-items-center text-7xl text-white">
            <div className="rotate-[5deg] text-inherit">Agenda</div>
            <div className="place-self-start">
              <SectionTag rotation={-5} color="bg-red-400">
                <div className="text-white">llamada</div>
              </SectionTag>
            </div>
            <div className="place-self-end">
              <SectionTag rotation={5}>
                <div className="text-white">gratuita</div>
              </SectionTag>
            </div>
          </div>
        </div>
        {/* <div className="btn-primary">Agenda tu llamada</div> */}
      </div>
    </section>
  );
}

export default CtaBanner;
