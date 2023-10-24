import { REQUEST_METHOD_TYPES } from "../../constants/constants";
import {
  FETCH_ARTS,
  FETCH_HOME,
  FETCH_SCIENCE,
  FETCH_US,
  FETCH_WORLD,
} from "../../constants/endpoints";
import { baseRequest } from "../../utill/baseRequest";

export const fetchArt = () => {
  return baseRequest(FETCH_ARTS, REQUEST_METHOD_TYPES.GET);
};
export const fetchHome = () => {
  return baseRequest(FETCH_HOME, REQUEST_METHOD_TYPES.GET);
};
export const fetchScience = () => {
  return baseRequest(FETCH_SCIENCE, REQUEST_METHOD_TYPES.GET);
};
export const fetchUS = () => {
  return baseRequest(FETCH_US, REQUEST_METHOD_TYPES.GET);
};
export const fetchWorld = () => {
  return baseRequest(FETCH_WORLD, REQUEST_METHOD_TYPES.GET);
};
