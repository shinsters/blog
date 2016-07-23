import { BlogAppPage } from './app.po';

describe('blog-app App', function() {
  let page: BlogAppPage;

  beforeEach(() => {
    page = new BlogAppPage();
  });

  it('should display a title saying John Harrison', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('John Harrison');
  });
});
