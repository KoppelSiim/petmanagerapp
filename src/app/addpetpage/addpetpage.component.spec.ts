import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpetpageComponent } from './addpetpage.component';

describe('AddpetpageComponent', () => {
  let component: AddpetpageComponent;
  let fixture: ComponentFixture<AddpetpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpetpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
