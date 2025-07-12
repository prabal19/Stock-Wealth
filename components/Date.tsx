"use client";
import moment from "moment";
 
const CreationDate = ({ articleNumber }: { articleNumber: number }) => {
  return <span>{moment(Date.now() - articleNumber * 86400000).format("DD MMM YYYY")}</span>;
};
 
export default CreationDate;