import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBuilderComponent } from './service-builder.component';

describe('ServiceBuilderComponent', () => {
  let component: ServiceBuilderComponent;
  let fixture: ComponentFixture<ServiceBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceBuilderComponent]
    });
    fixture = TestBed.createComponent(ServiceBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
