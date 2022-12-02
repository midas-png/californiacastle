import { ServerApi, LocationApi } from './src';

export class Api {
  server = new ServerApi();
  location = new LocationApi();
}
