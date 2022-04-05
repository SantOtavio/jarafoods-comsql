import { TestBed } from '@angular/core/testing';

import { RestaurantelistService } from './restaurantelist.service';

describe('RestaurantelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantelistService = TestBed.get(RestaurantelistService);
    expect(service).toBeTruthy();
  });
});
