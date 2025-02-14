import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBuilderComponent } from './home-builder.component';

describe('HomeBuilderComponent', () => {
  let component: HomeBuilderComponent;
  let fixture: ComponentFixture<HomeBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBuilderComponent]
    });
    fixture = TestBed.createComponent(HomeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
