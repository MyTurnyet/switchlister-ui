import { DefaultBodyType, rest, RestContext } from 'msw';
import { c, v } from 'msw/lib/SetupApi-b2f0e5ac';

export const basePath = 'https://switchlister-api.herokuapp.com/';
export const ApiHandler = {
  get200Result: <T extends DefaultBodyType>(res: v<c>, ctx: RestContext, returnedData: T) => {
    return res(ctx.status(200), ctx.json(returnedData));
  },
  createApiCall: <T extends DefaultBodyType>(path: string, returnData: T) => {
    return rest.get(basePath + path, async (req, res, ctx) =>
      ApiHandler.get200Result<T>(res, ctx, returnData),
    );
  },
};
