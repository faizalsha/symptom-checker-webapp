import { HOME_ERROR, HOME_LOADED, HOME_LOADING } from '../actions/types';

export const homeError = (payload) => ({ type: HOME_ERROR, payload });

export const homeLoading = () => ({ type: HOME_LOADING });

export const homeLoaded = (payload) => ({ type: HOME_LOADED, payload });
