import { TestBed } from '@angular/core/testing';

import { ListfoodsService } from './listfoods.service';

describe('ListfoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListfoodsService = TestBed.get(ListfoodsService);
    expect(service).toBeTruthy();
  });
});
