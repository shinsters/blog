export class BlogAppPage {
  
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return element(by.css('app-root app-nav div h1')).getText();
  }

}
