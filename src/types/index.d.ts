export {};
declare global {
  namespace jest {
    interface Matchers<CustomMatcherResult> {
      toMatchInAnyOrder(expectedArray: any[]): CustomMatcherResult;

      toHaveElementsWithText(...expectedText: string[]): CustomMatcherResult;

      toNotHaveElementsWithText(...expectedText: string[]): CustomMatcherResult;
    }
  }
}
