import { RestcadastroModule } from './restcadastro.module';

describe('RestcadastroModule', () => {
  let restcadastroModule: RestcadastroModule;

  beforeEach(() => {
    restcadastroModule = new RestcadastroModule();
  });

  it('should create an instance', () => {
    expect(restcadastroModule).toBeTruthy();
  });
});
