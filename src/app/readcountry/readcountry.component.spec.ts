import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadcountryComponent } from './readcountry.component';

describe('ReadcountryComponent', () => {
  let component: ReadcountryComponent;
  let fixture: ComponentFixture<ReadcountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadcountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
