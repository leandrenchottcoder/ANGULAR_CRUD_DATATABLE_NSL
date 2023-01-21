import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStudentsComponent } from './detail-students.component';

describe('DetailStudentsComponent', () => {
  let component: DetailStudentsComponent;
  let fixture: ComponentFixture<DetailStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
