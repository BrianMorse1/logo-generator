const Triangle = require('./triangle');
describe('Triangle', () => {
  it(`Should render a triangle to our specifications properly.`, () => {
    const triangle = new Triangle(`red`, `white`, `TST`);
    expect(triangle.render()).toEqual(`<svg version="1.1" width="320" height="320" xmlns="http://www.w3.org/2000/svg">
<polygon points="160, 40 260, 200 60, 200" fill="red"/>
<text x="163" y="160" font-size="50" text-anchor="middle" fill="white">TST</text>
</svg>`);
  });
});