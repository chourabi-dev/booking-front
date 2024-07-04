import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderEditorComponent } from './builder-editor.component';

describe('BuilderEditorComponent', () => {
  let component: BuilderEditorComponent;
  let fixture: ComponentFixture<BuilderEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderEditorComponent]
    });
    fixture = TestBed.createComponent(BuilderEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
