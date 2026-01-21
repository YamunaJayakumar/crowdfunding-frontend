import { createContext, useState } from "react";

// create context
export const CampaignFilterContext = createContext();

// provider
export function CampaignFilterProvider({ children }) {
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("");

  return (
    <CampaignFilterContext.Provider
      value={{
        searchKey,
        setSearchKey,
        category,
        setCategory,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </CampaignFilterContext.Provider>
  );
}
