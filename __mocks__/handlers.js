import { rest } from 'msw';

const handlers = [
  rest.get('https://eatgo-customer-api.ahastudio.com/regions', async (req, res, ctx) => {
    const originalResponse = await ctx.fetch(req);
    const regions = await originalResponse.json();
    return res(
      ctx.json(regions),
    );
  }),
  rest.get('https://eatgo-customer-api.ahastudio.com/categories', async (req, res, ctx) => {
    const originalResponse = ctx.fetch(req);
    const categories = await originalResponse.json();
    return res(
      ctx.json(categories),
    );
  }),
  rest.get('https://eatgo-customer-api.ahastudio.com/restaurants', (req, res, ctx) => res(
    ctx.json([{ id: 1, name: '부대찌개' }]),
  )),
];

export default handlers;
