export interface RequestActionType {
  INITIATE: string;
  SUCCESS: string;
  ERROR: string;
}

export interface DefaultActionType {
  type: string;
  payload?: any;
}

export type DefaultActionFunctionType = (...payload: any) => any;
