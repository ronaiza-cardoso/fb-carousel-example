import { FbSlidesPage } from './app.po';

describe('fb-slides App', () => {
  let page: FbSlidesPage;

  beforeEach(() => {
    page = new FbSlidesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
