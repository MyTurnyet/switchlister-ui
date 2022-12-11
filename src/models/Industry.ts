export interface IndustryState {
  name: string;
}

export class Industry {
  constructor(private industryState: IndustryState) {}

  get name(): string {
    return this.industryState.name;
  }
}
