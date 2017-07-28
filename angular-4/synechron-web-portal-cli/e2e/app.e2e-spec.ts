import { SynechronWebPortalCliPage } from './app.po';

describe('synechron-web-portal-cli App', () => {
  let page: SynechronWebPortalCliPage;

  beforeEach(() => {
    page = new SynechronWebPortalCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
