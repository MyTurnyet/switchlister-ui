export class Train {
  constructor(private trainName: string, private stations: string[] = []) {}

  public get name(): string {
    return this.trainName;
  }
  public get stationNames(): string[] {
    return this.stations;
  }
}
