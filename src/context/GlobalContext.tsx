import { createContext, PropsWithChildren, useContext, useState } from "react";

export const GlobalSearchContext: any = createContext<any>(null);
const subject : {title: string, api: string, feature: boolean, viewall: string} []= [
  { title: "Featured Offer", api: "featuredoffer", feature: false, viewall: "featured" },
  { title: "Limited Offer", api: "limitedoffer", feature: true , viewall: "limitedoffer" },
];

export const useGolbalSearch: any = () => {
  const { data, setData, searchData, setSearchData, subject }: any =
    useContext<any>(GlobalSearchContext);
  if (!GlobalSearchContext) {
    throw new Error("Golbal search context is not initaialized");
  }
  return { data, setData, searchData, setSearchData, subject }
};

export const GlobalSearchProvider = ({ children }: PropsWithChildren) => {
    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState("");
 

    return <GlobalSearchContext.Provider value={{
       data, setData, searchData, setSearchData, subject}}>
        {children}
    </GlobalSearchContext.Provider>
}
