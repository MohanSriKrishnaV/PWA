import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftOrders } from './draft-orders';

describe('DraftOrders', () => {
  let component: DraftOrders;
  let fixture: ComponentFixture<DraftOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftOrders],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftOrders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
