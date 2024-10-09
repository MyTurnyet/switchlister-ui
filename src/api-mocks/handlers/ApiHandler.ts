import { DefaultBodyType, rest, RestContext } from 'msw';
import { c, v } from 'msw/lib/SetupApi-b2f0e5ac';

export const basePath = 'https://railroad-data-api-35e431c26fea.herokuapp.com/';
export const ApiHandler = {
  get200Result: <T extends DefaultBodyType>(
    res: v<c>,
    ctx: RestContext,
    returnedData: T | undefined,
  ) => {
    return res(ctx.status(200), ctx.json(returnedData));
  },
  createApiGet: <T extends DefaultBodyType>(path: string, returnData: T) => {
    return rest.get(basePath + path, async (req, res, ctx) =>
      ApiHandler.get200Result<T>(res, ctx, returnData),
    );
  },
  createApiPost: <T extends DefaultBodyType>(path: string) => {
    return rest.post(basePath + path, async (req, res, ctx) =>
      ApiHandler.get200Result<T>(res, ctx, undefined),
    );
  },
};
