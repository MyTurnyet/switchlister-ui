import { IndustryCollection } from '../models/collections/IndustryCollection';
import { createContext, PropsWithChildren, useContext } from 'react';

export interface IndustriesDataContext {
  IndustriesCollection: IndustryCollection;
  isLoading: boolean;
  getIndustries: () => void;
}

export const IndustriesContext = createContext<IndustriesDataContext | undefined>(undefined);
export const useIndustryData = (): IndustriesDataContext => {
  const context = useContext(IndustriesContext);
  if (context === undefined) {
    throw Error(
      'useIndustryData must be used inside of a IndustryDataProvider, ' +
        'otherwise it will not function correctly.',
    );
  }
  return context;
};

export const IndustriesProvider = ({ children }: PropsWithChildren) => {
  const contextValues: IndustriesDataContext = {
    IndustriesCollection: new IndustryCollection([]),
    getIndustries: (): void => {
      return;
    },
    isLoading: false,
  };
  return <IndustriesContext.Provider value={contextValues}>{children}</IndustriesContext.Provider>;
};
