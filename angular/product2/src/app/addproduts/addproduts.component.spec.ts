import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodutsComponent } from './addproduts.component';

describe('AddprodutsComponent', () => {
  let component: AddprodutsComponent;
  let fixture: ComponentFixture<AddprodutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprodutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprodutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
