import { Mode } from "../../../shared/models/mode";
import { ExternalWorkers } from "../../external-workers/interfaces/external-workers";

export interface SendData {
  data: ExternalWorkers;
  mode: Mode;
}
