import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetActif } from './projet-actif';

describe('ProjetActif', () => {
  let component: ProjetActif;
  let fixture: ComponentFixture<ProjetActif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetActif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetActif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
