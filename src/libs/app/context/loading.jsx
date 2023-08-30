import LoadingHardPage from "@/core/components/LoadingHardPage";
import { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loadingPage, setLoadingPage] = useState(false);
  return (
    <LoadingContext.Provider value={{ loadingPage, setLoadingPage }}>
      <LoadingHardPage loading={loadingPage} />
      {children}
    </LoadingContext.Provider>
  );
};
