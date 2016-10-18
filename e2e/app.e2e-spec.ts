import { TnrPage } from './app.po';

describe('tnr App', function() {
  let page: TnrPage;

  beforeEach(() => {
    page = new TnrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tnr works!');
  });
});
