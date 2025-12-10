import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ActionItemsSection } from "./sections/ActionItemsSection";
import { BankingCoordinatesSection } from "./sections/BankingCoordinatesSection";
import { BankingEstablishmentSection } from "./sections/BankingEstablishmentSection";
import { FinancialInfoSection } from "./sections/FinancialInfoSection";
import { FormWrapperSection } from "./sections/FormWrapperSection";
import { MainContentWrapperSection } from "./sections/MainContentWrapperSection";
import { PaymentMethodSection } from "./sections/PaymentMethodSection";
import { PaymentPrincipleSection } from "./sections/PaymentPrincipleSection";
import { PersonalInfoSection } from "./sections/PersonalInfoSection";
import { SubscriptionDetailsSection } from "./sections/SubscriptionDetailsSection";
import { TrainingDetailsSection } from "./sections/TrainingDetailsSection";

export const AVI = (): React.ReactNode => {
  return (
    <div className="relative w-full bg-[#f5f6fa] flex flex-col items-center py-8 px-4 md:px-6">
      <div className="w-full max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-[240px] flex-shrink-0">
            <MainContentWrapperSection />
          </aside>

          <main className="flex-1">
            <SubscriptionDetailsSection />

            <Card className="bg-white rounded-[25px] border border-[#d7d7d7] shadow-[0px_20px_43px_#00000005,0px_79px_79px_#00000005,0px_177px_106px_#00000003,0px_315px_126px_transparent,0px_492px_138px_transparent] mt-6">
              <CardContent className="p-4 md:p-8">
                <div className="space-y-6">
                  <FormWrapperSection />
                  <PersonalInfoSection />
                  <ActionItemsSection />
                  <TrainingDetailsSection />
                  <FinancialInfoSection />
                  <PaymentMethodSection />
                  <PaymentPrincipleSection />
                  <BankingEstablishmentSection />
                  <BankingCoordinatesSection />
                </div>

                <div className="flex justify-end mt-8">
                  <Button className="bg-[#4379ee] hover:bg-[#3668dd] text-white rounded-xl h-8 px-6 font-text-xs-font-semibold text-[length:var(--text-xs-font-semibold-font-size)] font-[number:var(--text-xs-font-semibold-font-weight)]">
                    Commencer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      <div className="pointer-events-none hidden lg:block top-[65px] left-[1050px] absolute w-6 h-6 bg-[url(/office-building.svg)] bg-[100%_100%]" />

      <img
        className="pointer-events-none hidden lg:block absolute w-0 h-0 top-[-514.45%] left-[226.53%]"
        alt="Vector"
        src="/vector.svg"
      />
    </div>
  );
};
