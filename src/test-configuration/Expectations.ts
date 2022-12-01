import CustomMatcherResult = jest.CustomMatcherResult;
import { RenderResult } from '@testing-library/react';
import { expect } from '@jest/globals';

declare module 'expect' {
  interface Matchers<R> {
    toMatchInAnyOrder(expectedArray: any[]): CustomMatcherResult;

    toHaveElementsWithText(...expectedText: string[]): CustomMatcherResult;

    toNotHaveElementsWithText(...expectedText: string[]): CustomMatcherResult;
  }

  //   }
}

function createPassingResult(): CustomMatcherResult {
  return {
    pass: true,
    message: () => '',
  };
}

function createFailingResult(message: string): CustomMatcherResult {
  return {
    pass: false,
    message: () => message,
  };
}

expect.extend({
  toMatchInAnyOrder(actualArray: any[], expectedArray: any[]): CustomMatcherResult {
    expectedArray.forEach((item) => {
      expect(actualArray).toContainEqual(item);
    });
    expect(actualArray.length).toEqual(expectedArray.length);
    return createPassingResult();
  },
  toHaveElementsWithText(screen: RenderResult, ...expectedText: string[]): CustomMatcherResult {
    expectedText.forEach((text) => screen.getByText(text));
    return createPassingResult();
  },
  toNotHaveElementsWithText(screen: RenderResult, ...expectedText: string[]): CustomMatcherResult {
    try {
      expectedText.forEach((text) => screen.getByText(text));
      return createFailingResult('element was found with a given text');
    } catch (error) {
      return createPassingResult();
    }
  },
});
