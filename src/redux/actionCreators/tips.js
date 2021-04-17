import { TIP_ERROR, TIP_LOADED, TIP_LOADING } from '../actions/types';

export const tipsLoading = () => ({ type: TIP_LOADING });

export const tipsLoaded = (payload) => ({ type: TIP_LOADED, payload });

export const tipsError = (payload) => ({ type: TIP_ERROR, payload });
