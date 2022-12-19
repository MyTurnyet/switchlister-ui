export enum CarType {
  All = 'All',
  HT = 'HT',
  XM = 'XM',
  XMO = 'XMO',
}

export interface RollingStockState {
  id: string;
  carType: CarType;
  color: string;
  roadName: string;
  roadNumber: number;
  length: number;
  loaded: boolean;
}

export class RollingStock {
  static EMPTY: RollingStock = new RollingStock({
    carType: CarType.All,
    color: '',
    id: '',
    length: 0,
    loaded: false,
    roadName: '',
    roadNumber: 0,
  });

  constructor(private state: RollingStockState) {}

  get carType(): string {
    return this.state.carType.toString();
  }

  get displayName(): string {
    return `${this.state.roadName} ${this.state.roadNumber}`;
  }

  get id(): string {
    return this.state.id;
  }

  isCarType(expectedType: CarType): boolean {
    return this.state.carType === expectedType;
  }
}
