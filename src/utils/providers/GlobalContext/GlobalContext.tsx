import { createContext, useReducer, useEffect } from 'react';
import { ActionTypes } from './globalContext.enums';
import { reducer } from './globalContext.reducer';
import { initialContext } from './globalContext.store';
import { Action, ProductType, Props } from './globalContext.types';
import { getProducts } from '../../../business-logic';

export const GlobalContext = createContext<{
  state: typeof initialContext;
  dispatch: (action: Action) => void;
}>({ state: initialContext, dispatch: () => {} });

const GlobalContextProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialContext);

  useEffect(() => {
    const fetchProducts = (products: ProductType[]) => dispatch({ type: ActionTypes.GET_PRODUCTS, payload: products });
    getProducts(fetchProducts);
  }, []);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
