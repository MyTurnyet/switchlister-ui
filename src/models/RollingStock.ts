export interface RollingStockState {
  carType: string;
  color: string;
  roadName: string;
  roadNumber: number;
  length: number;
  loaded: boolean;
}

export class RollingStock {
  constructor(private state: RollingStockState) {}

  isCarType(expectedType: string): boolean {
    return this.state.carType === expectedType;
  }
}
