import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetcsComponent } from './projetcs.component';

describe('ProjetcsComponent', () => {
  let component: ProjetcsComponent;
  let fixture: ComponentFixture<ProjetcsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetcsComponent]
    });
    fixture = TestBed.createComponent(ProjetcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
