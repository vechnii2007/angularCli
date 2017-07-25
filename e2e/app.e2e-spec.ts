import { TestCsPage } from './app.po';

describe('test-cs App', () => {
  let page: TestCsPage;

  beforeEach(() => {
    page = new TestCsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
