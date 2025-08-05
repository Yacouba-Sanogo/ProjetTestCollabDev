import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNavigation } from './bar-navigation';

describe('BarNavigation', () => {
  let component: BarNavigation;
  let fixture: ComponentFixture<BarNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
