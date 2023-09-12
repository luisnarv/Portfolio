import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesingProjectsComponent } from './desing-projects.component';

describe('DesingProjectsComponent', () => {
  let component: DesingProjectsComponent;
  let fixture: ComponentFixture<DesingProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesingProjectsComponent]
    });
    fixture = TestBed.createComponent(DesingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
