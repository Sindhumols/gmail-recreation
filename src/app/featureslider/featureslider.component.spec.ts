import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesliderComponent } from './featureslider.component';

describe('FeaturesliderComponent', () => {
  let component: FeaturesliderComponent;
  let fixture: ComponentFixture<FeaturesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
