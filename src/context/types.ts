import { DataSources } from "../features";

export interface Context {
  auth: Auth;
  dataSources: DataSources;
}

export interface Token {
  id: string;
  name: string;
}

export interface Auth {
  id?: string;
  name?: string;
  jwt?: string;
  refreshToken?: string;
}
