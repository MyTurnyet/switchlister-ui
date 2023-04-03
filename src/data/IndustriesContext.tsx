import { IndustryCollection } from '../models/collections/IndustryCollection';
import { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { Station } from '../models/Station';
import { useReactState } from '../state-management/ReactState';
import { axiosIndustriesApi, IndustriesApi } from './api/AxiosIndustriesApi';
import { IndustryState } from '../models/Industry';
import { axiosTrainApi } from './api/trains/AxiosTrainApi';

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

export interface IndustriesProviderProps extends PropsWithChildren {
  industryApi: IndustriesApi;
}

export const IndustriesProvider = (props: IndustriesProviderProps) => {
  const industryCollectionState = useReactState<IndustryCollection>(new IndustryCollection([]));

  const refreshData = useCallback(async () => {
    await props.industryApi.getIndustries().then((data: IndustryState[]) => {
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
  return (
    <IndustriesContext.Provider value={contextValues}>{props.children}</IndustriesContext.Provider>
  );
};

IndustriesProvider.defaultProps = { industryApi: axiosIndustriesApi };
