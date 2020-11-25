import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCountryComponent } from './updateCountry.component';

describe('UpdatecountryComponent', () => {
  let component: UpdateCountryComponent;
  let fixture: ComponentFixture<UpdateCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
