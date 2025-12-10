import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

export const PaymentPrincipleSection = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
        <Badge
          variant="outline"
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#0140ff] bg-transparent"
        >
          <span className="[font-family:'Roboto',Helvetica] font-medium text-[#0140ff] text-base">
            08
          </span>
        </Badge>

        <div className="flex-1 flex items-center min-h-10 rounded-[7px] border border-solid border-[#0140ff] relative">
          <div className="flex-1 flex items-center justify-center h-full px-4">
            <span className="[font-family:'Roboto',Helvetica] font-medium text-[#979797] text-sm">
              Proforma
            </span>
          </div>

          <CollapsibleTrigger asChild>
            <button
              aria-label="Ouvrir/fermer la section Proforma"
              className="flex items-center justify-center w-[41px] h-10 bg-[#d9d9d9]"
            >
              <ChevronDownIcon className="w-[14px] h-3 text-gray-600" />
            </button>
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent className="mt-3 rounded-[10px] border border-dashed border-[#d7d7d7] bg-white p-4 text-sm text-slate-600">
        Contenu à compléter (proforma).
      </CollapsibleContent>
    </Collapsible>
  );
};
