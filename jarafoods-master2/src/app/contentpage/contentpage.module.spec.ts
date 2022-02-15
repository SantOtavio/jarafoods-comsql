import { ContentpageModule } from './contentpage.module';

describe('ContentpageModule', () => {
  let contentpageModule: ContentpageModule;

  beforeEach(() => {
    contentpageModule = new ContentpageModule();
  });

  it('should create an instance', () => {
    expect(contentpageModule).toBeTruthy();
  });
});
