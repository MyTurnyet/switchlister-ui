export enum CarType {
  HT,
  XM,
  XMO,
}

export interface RollingStockState {
  carType: string;
  carTypeEnum: CarType;
  color: string;
  roadName: string;
  roadNumber: number;
  length: number;
  loaded: boolean;
}

export class RollingStock {
  constructor(private state: RollingStockState) {}

  get displayName(): string {
    return `${this.state.roadName} ${this.state.roadNumber}`;
  }
  isCarType(expectedType: string): boolean {
    return this.state.carType === expectedType;
  }
  get carType(): string {
    return this.state.carType;
  }
}
