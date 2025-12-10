import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

export const ActionItemsSection = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <div className="relative w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-solid border-[#0140ff] shrink-0">
          <span className="[font-family:'Roboto',Helvetica] font-medium text-[#0140ff] text-base text-center tracking-[0] leading-[normal]">
            04
          </span>
        </div>

        <div className="flex-1 rounded-[7px] border border-solid border-[#0140ff] flex items-center justify-center px-3">
          <span className="[font-family:'Roboto',Helvetica] font-medium text-[#999999] text-sm text-center tracking-[0] leading-5">
            Principe de paiement
          </span>
        </div>

        <CollapsibleTrigger asChild>
          <button
            aria-label="Ouvrir/fermer la section Principe de paiement"
            className="w-[41px] h-10 flex items-center justify-center bg-[#d9d9d9] shrink-0"
          >
            <ChevronDownIcon className="w-[13.86px] h-3 text-black" />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="mt-3 rounded-[10px] border border-dashed border-[#d7d7d7] bg-white p-4 text-sm text-slate-600">
        Contenu à compléter (principe de paiement).
      </CollapsibleContent>
    </Collapsible>
  );
};
