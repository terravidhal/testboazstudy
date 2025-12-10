import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

export const TrainingDetailsSection = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <section className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative">
        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-solid border-[#0140ff] flex items-center justify-center">
          <span className="[font-family:'Roboto',Helvetica] font-medium text-[#0140ff] text-base text-center tracking-[0] leading-[normal]">
            05
          </span>
        </div>

        <div className="flex-1 min-h-10 rounded-[7px] border border-solid border-[#0140ff] flex items-center px-5">
          <span className="[font-family:'Roboto',Helvetica] font-medium text-[#999999] text-sm tracking-[0] leading-5">
            Mode de paiement
          </span>
        </div>

        <CollapsibleTrigger asChild>
          <Button
            aria-label="Ouvrir/fermer la section Mode de paiement"
            variant="ghost"
            className="flex-shrink-0 w-[41px] h-10 bg-[#d9d9d9] hover:bg-[#c9c9c9] p-0 flex items-center justify-center rounded-none"
          >
            <img className="w-[13.86px] h-3" alt="Chevron" src="/polygon-1.svg" />
          </Button>
        </CollapsibleTrigger>
      </section>

      <CollapsibleContent className="mt-3 rounded-[10px] border border-dashed border-[#d7d7d7] bg-white p-4 text-sm text-slate-600">
        Contenu à compléter (mode de paiement).
      </CollapsibleContent>
    </Collapsible>
  );
};
