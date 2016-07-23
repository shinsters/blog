import { BlogAppPage } from './app.po';

describe('blog-app App', function() {
  let page: BlogAppPage;

  beforeEach(() => {
    page = new BlogAppPage();
  });

  it('should display message saying bums', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bums');
  });
});
