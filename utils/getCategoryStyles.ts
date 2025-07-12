// utils/getCategoryStyles.ts

export const categoryStyleMap: Record<string, string> = {
  "Market Pulse": "bg-red-100 text-yellow-800",
  "Smart Investment": "bg-blue-100 text-blue-800",
  "Wealth Mindset": "bg-green-100 text-green-800",
  "Stock Reviews": "bg-purple-100 text-purple-800",
  "default": "bg-gray-100 text-red-800",
};

export const getCategoryStyles = (category: string = ""): string => {
  return categoryStyleMap[category] || categoryStyleMap["default"];
};
