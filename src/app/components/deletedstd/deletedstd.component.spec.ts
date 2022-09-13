import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedstdComponent } from './deletedstd.component';

describe('DeletedstdComponent', () => {
  let component: DeletedstdComponent;
  let fixture: ComponentFixture<DeletedstdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedstdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
