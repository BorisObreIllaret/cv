import { TestBed, inject } from '@angular/core/testing';

import { HtmlHeaderService } from './html-header.service';

describe('HtmlHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlHeaderService]
    });
  });

  it('should be created', inject([HtmlHeaderService], (service: HtmlHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
