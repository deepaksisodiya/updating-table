
var tableRow = require('./TableView');
jest.mock('./TableView');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  tableRow.mockClear();
});

describe('TableView', () => {
  it('Calls Constructor', () => {
    const TableView = new tableRow();
    expect(TableView).toBeTruthy();
  });
});
