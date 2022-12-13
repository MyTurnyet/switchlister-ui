export abstract class ItemList<T> {
  constructor(protected items: T[] = []) {}
  contains(expected: T): boolean {
    return this.items.some((value: T) => value === expected);
  }
}
