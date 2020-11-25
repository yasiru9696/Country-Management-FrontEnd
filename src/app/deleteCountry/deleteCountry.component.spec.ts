import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCountryComponent } from './deleteCountry.component';

describe('DeletecountryComponent', () => {
  let component: DeleteCountryComponent;
  let fixture: ComponentFixture<DeleteCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
