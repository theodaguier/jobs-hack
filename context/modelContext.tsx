"use client";

import { createContext, useState, useContext } from "react";

interface ModelContextValue {
  model: string;
  setModel: any;
}

interface ModelProviderProps {
  children: React.ReactNode;
}

const ModelContext = createContext<ModelContextValue | null>(null);

const ModelProvider: React.FC<ModelProviderProps> = ({ children }) => {
  const [model, setModel] = useState<string>("Student");

  return (
    <ModelContext.Provider value={{ model, setModel }}>
      {children}
    </ModelContext.Provider>
  );
};

const useModelContext = () => {
  const context = useContext(ModelContext);

  if (context === null) {
    throw new Error("useModel must be used within a ModelProvider");
  }

  return context;
};

export { ModelProvider, useModelContext };
