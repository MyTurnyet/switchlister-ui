import { IndustryCollection } from '../models/collections/IndustryCollection';
import { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { Station } from '../models/Station';
import { useReactState } from '../state-management/ReactState';
import { IndustriesApi } from './api/IndustriesApi';
import { IndustryState } from '../models/Industry';

export interface IndustriesDataContext {
  industries: IndustryCollection;
  industriesAtStation: (station: Station) => IndustryCollection;
  isLoading: boolean;
  refreshData: () => void;
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
  const isLoadingState = useReactState<boolean>(false);
  const industryCollectionState = useReactState<IndustryCollection>(new IndustryCollection([]));
  const refreshData = useCallback(async () => {
    isLoadingState.setValue(true);
    await IndustriesApi.getIndustries().then((data: IndustryState[]) => {
      const industryCollection = IndustryCollection.createFromIndustryStateArray(data);
      industryCollectionState.setValue(industryCollection);
    });
    isLoadingState.setValue(false);
  }, [industryCollectionState]);

  const contextValues: IndustriesDataContext = {
    industriesAtStation: (station: Station): IndustryCollection => {
      return new IndustryCollection([]);
    },
    industries: industryCollectionState.value,
    refreshData,
    isLoading: isLoadingState.value,
  };
  return <IndustriesContext.Provider value={contextValues}>{children}</IndustriesContext.Provider>;
};
