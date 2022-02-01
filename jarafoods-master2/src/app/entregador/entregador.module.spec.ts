import { EntregadorModule } from './entregador.module';

describe('EntregadorModule', () => {
  let entregadorModule: EntregadorModule;

  beforeEach(() => {
    entregadorModule = new EntregadorModule();
  });

  it('should create an instance', () => {
    expect(entregadorModule).toBeTruthy();
  });
});
