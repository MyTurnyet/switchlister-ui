import { IndustryCollection } from '../models/collections/IndustryCollection';
import { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { Station } from '../models/Station';
import { useReactState } from '../state-management/ReactState';
import { AxiosIndustriesApi } from './api/AxiosIndustriesApi';
import { IndustryState } from '../models/Industry';

export interface IndustriesDataContext {
  industries: IndustryCollection;
  industriesAtStation: (station: Station) => IndustryCollection;
  refreshIndustriesData: () => void;
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
  const industryCollectionState = useReactState<IndustryCollection>(new IndustryCollection([]));

  const refreshData = useCallback(async () => {
    await AxiosIndustriesApi.getIndustries().then((data: IndustryState[]) => {
      const industryCollection = IndustryCollection.createFromIndustryStateArray(data);
      industryCollectionState.setValue(industryCollection);
    });
  }, [industryCollectionState]);

  const industriesAtStation = (station: Station): IndustryCollection => {
    return industryCollectionState.value.getIndustriesForStation(station);
  };

  const contextValues: IndustriesDataContext = {
    industriesAtStation,
    industries: industryCollectionState.value,
    refreshIndustriesData: refreshData,
  };
  return <IndustriesContext.Provider value={contextValues}>{children}</IndustriesContext.Provider>;
};
