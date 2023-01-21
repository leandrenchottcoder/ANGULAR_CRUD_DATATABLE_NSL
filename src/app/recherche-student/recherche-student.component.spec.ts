import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheStudentComponent } from './recherche-student.component';

describe('RechercheStudentComponent', () => {
  let component: RechercheStudentComponent;
  let fixture: ComponentFixture<RechercheStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
