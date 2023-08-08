import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasizComponent } from './tareasiz.component';

describe('TareasizComponent', () => {
  let component: TareasizComponent;
  let fixture: ComponentFixture<TareasizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasizComponent]
    });
    fixture = TestBed.createComponent(TareasizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
