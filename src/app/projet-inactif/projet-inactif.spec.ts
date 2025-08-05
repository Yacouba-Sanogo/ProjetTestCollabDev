import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetInactif } from './projet-inactif';

describe('ProjetInactif', () => {
  let component: ProjetInactif;
  let fixture: ComponentFixture<ProjetInactif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetInactif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetInactif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
