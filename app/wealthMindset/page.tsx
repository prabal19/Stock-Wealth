
import Navlist from '@/components/Navlist';
import politics from '@/constants/politics';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Wealth Mindset",
  };

const wealthMindset = () => {
  return <Navlist pageTitle="Wealth Mindset" posts={politics} />;
};

export default wealthMindset;
