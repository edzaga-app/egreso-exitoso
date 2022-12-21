import { Mode } from "../models/mode";

export interface SendDataTableDialog<T>{
  data: T;
  mode: Mode;
}
