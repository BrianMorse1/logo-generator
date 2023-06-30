const Square = require('./square');
describe('Square', () => {
  it(`Should render a square to our specifications properly.`, () => {
    const square = new Square(`red`, `white`, `TST`);
    expect(square.render()).toEqual(`<svg version="1.1" width="320" height="320" xmlns="http://www.w3.org/2000/svg">
<rect x="80" y="60" width="160" height="160" fill="red"/>
<text x="160" y="160" font-size="60" text-anchor="middle" fill="white">TST</text>
</svg>`);
  });
});