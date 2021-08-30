/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { SessionContext } from 'context/SessionContext';
import * as careerService from '../services/careerService';
import { CareerModel } from '../models/CareerModel';

export interface CareerState {
  careers?: CareerModel[];
}

export const useStateContainer = (
  initialState: CareerState = {},
  sessionContext: typeof SessionContext,
) => {
  const {
    data: { sessionId },
  } = useContext(sessionContext);
  const [allCareers, setAllCareers] = useState(initialState.careers || []);

  useEffect(() => {
    careerService
      .listCareer(sessionId?.split(':::')[1])
      .then((career) => setAllCareers(career));
  }, [sessionId]);

  return {
    data: { allCareers },
  };
};

export const CareerContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

export interface CareerProviderProps {
  initialState?: CareerState;
}
export const CareerProvider: React.FC<CareerProviderProps> = ({
  children,
  initialState = {},
}) => {
  const contextValue = useStateContainer(initialState, SessionContext);
  return (
    <CareerContext.Provider value={contextValue}>
      {children}
    </CareerContext.Provider>
  );
};
