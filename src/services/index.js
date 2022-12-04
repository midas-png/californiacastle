import { ServerApi, LocationApi, AppointmentApi } from './src';

export class Api {
  server = new ServerApi();
  location = new LocationApi();
  appointment = new AppointmentApi();
}
