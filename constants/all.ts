import entertainment from "./entertainment";
import usNews from "./usnews";
import money from "./money";
import politics from "./politics";

const allArticles = [
    ...entertainment,
    ...usNews,
    ...money,
    ...politics,
] as TArticle[]

export default allArticles;