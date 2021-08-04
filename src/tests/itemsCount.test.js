import displayCount from '../itemscount.js';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve([
      {
        item_id: 53049,
        likes: 4,
      },
    ]),
  });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

test('Counts all items', async () => {
  const itemsCountTest = await displayCount();
  expect(itemsCountTest).toEqual(1);
});

