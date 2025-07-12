import Navlist from '@/components/Navlist';
import usNews from '@/constants/usnews';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Stock reviews",
  };

const stockReviews = () => {
  return <Navlist pageTitle="Stock reviews" posts={usNews} />;
};

export default stockReviews;