export interface iTodo {
  id: string;
  name: string;
  completed: boolean;
}

export interface iTodos extends Array<iTodo> {}
