export abstract class ItemList<T> {
  constructor(protected items: T[] = []) {}
  contains(expected: T): boolean {
    return this.items.some((value: T) => value === expected);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map(callBackFunction: (item: T, index?: number) => any): any {
    return this.items.map(callBackFunction);
  }
}
