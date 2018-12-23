import { AngularMongoAppPage } from './app.po';

describe('angular-mongo-app App', () => {
  let page: AngularMongoAppPage;

  beforeEach(() => {
    page = new AngularMongoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
