import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdupdateComponent } from './stdupdate.component';

describe('StdupdateComponent', () => {
  let component: StdupdateComponent;
  let fixture: ComponentFixture<StdupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
