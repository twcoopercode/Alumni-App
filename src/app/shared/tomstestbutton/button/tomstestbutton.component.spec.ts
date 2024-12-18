import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomstestbuttonComponent } from './tomstestbutton.component';

describe('TomstestbuttonComponent', () => {
  let component: TomstestbuttonComponent;
  let fixture: ComponentFixture<TomstestbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TomstestbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TomstestbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
