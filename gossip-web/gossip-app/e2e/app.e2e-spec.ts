import { GossipAppPage } from './app.po';

describe('gossip-app App', () => {
  let page: GossipAppPage;

  beforeEach(() => {
    page = new GossipAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
