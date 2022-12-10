export interface IndustryState {
  name: string;
}

export class Industry {
  constructor(private state: IndustryState) {}

  get name(): string {
    return this.state.name;
  }
}
