import { WithLabourPage } from './app.po';

describe('with-labour App', () => {
  let page: WithLabourPage;

  beforeEach(() => {
    page = new WithLabourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
