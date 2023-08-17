import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreComponentComponent } from './centre-component.component';

describe('CentreComponentComponent', () => {
  let component: CentreComponentComponent;
  let fixture: ComponentFixture<CentreComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentreComponentComponent]
    });
    fixture = TestBed.createComponent(CentreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
