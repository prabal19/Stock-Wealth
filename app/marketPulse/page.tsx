import Navlist from '@/components/Navlist';
import entertainment from '@/constants/entertainment';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Market Pulse",
  };

const marketPulse = () => {
  return <Navlist pageTitle="Market Pulse" posts={entertainment} />;
};

export default marketPulse;