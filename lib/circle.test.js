const Circle = require('./circle');
describe('Circle', () => {
  it(`Should render a circle to our specifications properly.`, () => {
    const circle = new Circle(`red`, `white`, `TST`);
    expect(circle.render()).toEqual(`<svg version="1.1" width="320" height="320" xmlns="http://www.w3.org/2000/svg">
<circle cx="160" cy="140" r="80" fill="red"/>
<text x="160" y="160" font-size="60" text-anchor="middle" fill="white">TST</text>
</svg>`);
  });
});