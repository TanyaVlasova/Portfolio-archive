import { useDispatch, useSelector, useStore } from 'react-redux';

import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch, AppStore } from '.';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = () => useStore<AppStore>();
