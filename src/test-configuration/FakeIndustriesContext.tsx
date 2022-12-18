import React, { PropsWithChildren } from 'react';
import { Industry } from '../models/Industry';
import { IndustriesContext, IndustriesDataContext } from '../data/IndustriesContext';
import { IndustryCollection } from '../models/collections/IndustryCollection';
import { Station } from '../models/Station';

export interface FakeIndustriesContextProps extends PropsWithChildren {
  industriesToReturn: Industry[];
}

const defaultProps: FakeIndustriesContextProps = { industriesToReturn: [] };

export const FakeIndustriesContext = (props: FakeIndustriesContextProps) => {
  const contextValues: IndustriesDataContext = {
    industriesAtStation: (station: Station): IndustryCollection => {
      return new IndustryCollection([]);
    },
    industries: new IndustryCollection(props.industriesToReturn),
    refreshIndustriesData: (): void => {
      return;
    },
    isLoading: false,
  };
  return (
    <IndustriesContext.Provider value={contextValues}>{props.children}</IndustriesContext.Provider>
  );
};

FakeIndustriesContext.defaultProps = defaultProps;
