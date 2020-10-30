import { IConnectUgReport } from './connect-ug-report.interface';
export interface IReport {
  reportId: number;
  title: String;
  name: String;
  revision: String;
  reportGroupFk: number;
  position: number;
  connectUgReport?: IConnectUgReport[];
}