import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureFilters } from './temperature-filters';

describe('TemperatureFilters', () => {
  let component: TemperatureFilters;
  let fixture: ComponentFixture<TemperatureFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(TemperatureFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
