import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLineRankingComponent } from './product-line-ranking.component';

describe('ProductLineRankingComponent', () => {
  let component: ProductLineRankingComponent;
  let fixture: ComponentFixture<ProductLineRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLineRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLineRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
