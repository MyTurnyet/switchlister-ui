import React, { PropsWithChildren } from 'react';
import { Industry } from '../models/Industry';
import { IndustriesContext, IndustriesDataContext } from '../data/api/IndustriesContext';
import { IndustryCollection } from '../models/collections/IndustryCollection';

export interface FakeIndustriesContextProps extends PropsWithChildren {
  industriesToReturn: Industry[];
}

const defaultProps: FakeIndustriesContextProps = { industriesToReturn: [] };

export const FakeIndustriesContext = (props: FakeIndustriesContextProps) => {
  const contextValues: IndustriesDataContext = {
    IndustriesCollection: new IndustryCollection(props.industriesToReturn),
    getIndustries: (): void => {},
    isLoading: false,
  };
  return (
    <IndustriesContext.Provider value={contextValues}>{props.children}</IndustriesContext.Provider>
  );
};

FakeIndustriesContext.defaultProps = defaultProps;
