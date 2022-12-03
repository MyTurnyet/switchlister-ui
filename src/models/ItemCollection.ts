export abstract class ItemCollection<T> {
  constructor(protected items: T[]) {}

  get count(): number {
    return this.items.length;
  }

  map(callBackFunction: (item: T, index?: number) => any): any {
    return this.items.map(callBackFunction);
  }

  isEmpty() {
    return this.count === 0;
  }
}
