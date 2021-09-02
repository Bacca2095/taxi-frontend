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
  const [currentCareerId, setCurrentCareerId] = useState(0);
  const [errorOnDelete, setErrorOnDelete] = useState(false);
  const [errorOnCreate, setErrorOnCreate] = useState(false);

  const updateCareerList = () => {
    careerService
      .listCareer(sessionId?.split(':::')[1])
      .then((career) => setAllCareers(career));
  };

  const deleteCareer = () => {
    careerService.deleteCareer(currentCareerId).then((res) => {
      if (res) {
        setErrorOnDelete(false);
      } else {
        setErrorOnDelete(true);
      }
    });
  };

  const createCareer = (career: CareerModel) => {
    careerService.createCareer(career).then((res) => {
      if (res) {
        setErrorOnCreate(false);
      } else {
        setErrorOnCreate(true);
      }
    });
  };

  useEffect(() => {
    careerService
      .listCareer(sessionId?.split(':::')[1])
      .then((career) => setAllCareers(career));
  }, [sessionId]);

  return {
    data: { allCareers, currentCareerId, errorOnDelete, errorOnCreate },
    mutations: {
      setCurrentCareerId,
      updateCareerList,
      deleteCareer,
      createCareer,
    },
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
