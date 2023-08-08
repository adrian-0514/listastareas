import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponeteTareasComponent } from './componete-tareas.component';

describe('ComponeteTareasComponent', () => {
  let component: ComponeteTareasComponent;
  let fixture: ComponentFixture<ComponeteTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponeteTareasComponent]
    });
    fixture = TestBed.createComponent(ComponeteTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
