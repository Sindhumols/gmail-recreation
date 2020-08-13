import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadkeyComponent } from './downloadkey.component';

describe('DownloadkeyComponent', () => {
  let component: DownloadkeyComponent;
  let fixture: ComponentFixture<DownloadkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
