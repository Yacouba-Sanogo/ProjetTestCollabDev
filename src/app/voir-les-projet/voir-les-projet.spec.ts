import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirLesProjet } from './voir-les-projet';

describe('VoirLesProjet', () => {
  let component: VoirLesProjet;
  let fixture: ComponentFixture<VoirLesProjet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoirLesProjet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirLesProjet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
