export abstract class ItemCollection<T> {
  constructor(protected items: T[]) {}

  get count(): number {
    return this.items.length;
  }

  contains(containedItem: T): boolean {
    return this.items.includes(containedItem);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map(callBackFunction: (item: T, index?: number) => any): any {
    return this.items.map(callBackFunction);
  }

  isEmpty() {
    return this.count === 0;
  }
}
