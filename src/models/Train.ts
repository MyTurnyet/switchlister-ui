export class Train {
  constructor(private trainName: string) {}
  public get name(): string {
    return this.trainName;
  }
}
