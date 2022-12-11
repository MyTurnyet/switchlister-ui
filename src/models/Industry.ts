export interface IndustryState {
  name: string;
}

export class Industry {
  constructor(private state: IndustryState) {}

  get name(): string {
    console.log('industry name ', this.state.name);
    return this.state.name;
  }
}
