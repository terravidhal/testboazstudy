import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

export const FinancialInfoSection = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <section className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
        <Badge
          variant="outline"
          className="flex items-center justify-center w-10 h-10 rounded-full border-[#0140ff] text-[#0140ff] [font-family:'Roboto',Helvetica] font-medium text-base"
        >
          06
        </Badge>

        <div className="flex items-center flex-1 min-h-10 rounded-[7px] border border-solid border-[#0140ff] overflow-hidden">
          <div className="flex items-center justify-center px-5 h-full flex-1">
            <span className="[font-family:'Roboto',Helvetica] font-medium text-[#999999] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
              Etablissement bancaire
            </span>
          </div>

          <CollapsibleTrigger asChild>
            <Button
              aria-label="Ouvrir/fermer la section Etablissement bancaire"
              variant="ghost"
              size="icon"
              className="h-10 w-[41px] bg-[#d9d9d9] hover:bg-[#c9c9c9] rounded-none flex items-center justify-center"
            >
              <ChevronDownIcon className="w-[13.86px] h-3 text-black" />
            </Button>
          </CollapsibleTrigger>
        </div>
      </section>

      <CollapsibleContent className="mt-3 rounded-[10px] border border-dashed border-[#d7d7d7] bg-white p-4 text-sm text-slate-600">
        Contenu à compléter (établissement bancaire).
      </CollapsibleContent>
    </Collapsible>
  );
};
