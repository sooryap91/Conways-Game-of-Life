 const {cellNeighbors} = require('./conway');
test('cellNeighbors should return the correct neighbors for the given coordinates', () => {
  expect(cellNeighbors(1, 1)).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ]);
});
test('cellNeighbors should return the correct neighbors for the given coordinates', () => {

  expect(cellNeighbors(0, 0)).toEqual([
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]);
});
  // Add more test cases if needed..
  // const {countLiveNeighbors} = require('./conway');
  // test('cellNeighbors should return the correct neighbors for the given coordinates', () => {
  //   expect(countLiveNeighbors(1, 1)).toEqual([
  //     [0, 0],
  //     [0, 1],
  //     [0, 2],
  //     [1, 0],
  //     [1, 2],
  //     [2, 0],
  //     [2, 1],
  //     [2, 2],
  //   ]);
  // });
  // test('cellNeighbors should return the correct neighbors for the given coordinates', () => {
  
  //   expect(countLiveNeighbors(0, 0)).toEqual([
  //     [-1, -1],
  //     [-1, 0],
  //     [-1, 1],
  //     [0, -1],
  //     [0, 1],
  //     [1, -1],
  //     [1, 0],
  //     [1, 1],
  //   ]);
  // });


