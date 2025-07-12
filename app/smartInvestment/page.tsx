import Navlist from '@/components/Navlist';
import money from '@/constants/money';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Smart Investment",
  };

const smartInvestment = () => {
  return <Navlist pageTitle="Smart Investment" posts={money} />;
};

export default smartInvestment;