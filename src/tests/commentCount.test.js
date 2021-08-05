import { commentCounter } from '../commentsRequest.js';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve([
      {
        comment: 'I did it like three times',
        creation_date: '2021-08-03',
        username: 'Sebastian',
      },
    ]),
  });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

test('It counts the right number of comments1', async () => {
  const commentNumber = await commentCounter(52772);
  expect(commentNumber).toEqual(1);
});

test('It counts the right number of comments1', async () => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve([
      {
        comment: 'I did it like three times',
        creation_date: '2021-08-03',
        username: 'Sebastian',
      },
      {
        comment: 'I did it like three times',
        creation_date: '2021-08-03',
        username: 'Sebastian',
      },
      {
        comment: 'I did it like three times',
        creation_date: '2021-08-03',
        username: 'Sebastian',
      },
    ]),
  });

  const commentNumber = await commentCounter(52772);
  expect(commentNumber).toEqual(3);
});

test('It counts the right number of comments2', async () => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve(Error),
  });

  const commentNumber = await commentCounter(52772);
  expect(commentNumber).toBe(0);
});
