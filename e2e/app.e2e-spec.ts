import { CourseFitPage } from './app.po';

describe('course-fit App', () => {
  let page: CourseFitPage;

  beforeEach(() => {
    page = new CourseFitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
