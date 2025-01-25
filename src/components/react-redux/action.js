import ActionType from "./ActionType";

export const setHeaderTitle = (title) => ({
  type: ActionType.SET_HEADER_TITLE,
  payload: title,
});

export const setActivePage = (data) => ({
  type: ActionType.SET_ACTIVEPAGE,
  payload: data,
});
