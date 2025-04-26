import Image from "next/image";
import "./globals.css";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Sidebar from "@/components/Sidebar";
import AccountProgress from "@/components/AccountProgress";
import Franchisees from "@/components/Franchisees";
import InsightsFeedback from "@/components/InsightsFeedback";
import FinancialWellbeing from "@/components/FinancialWellbeing";
import ProspectLeads from "@/components/ProspectLeads";
import PendingQuestions from "@/components/PendingQuestions";
import ChatAssistant from "@/components/ChatAssistant";

export default function Home() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="ml-64  flex-1">
         <div className="Hader-nav p-4  px-6 shadow flex justify-end items-center-safe gap-4">
         <Cog6ToothIcon className="h-6 w-6" />
         <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Phoenix Baker"
          className="w-10 h-10 rounded-full object-cover"
        />
         </div>
        <div className="flex gap-3 p-6">
          <AccountProgress />
          <div className="flex gap-2 flex-col w-1/2">
          <Franchisees />
          <FinancialWellbeing />
          </div>
          <div className="flex gap-2 flex-col w-1/2">
          <InsightsFeedback />
          <ProspectLeads />
         
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
        <PendingQuestions /> 
        <ChatAssistant />
        </div>
      </main>
    </div>
  );
}
