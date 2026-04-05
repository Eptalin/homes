import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingCard } from './housing-card';

describe('HousingCard', () => {
  let component: HousingCard;
  let fixture: ComponentFixture<HousingCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingCard],
    }).compileComponents();

    fixture = TestBed.createComponent(HousingCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
