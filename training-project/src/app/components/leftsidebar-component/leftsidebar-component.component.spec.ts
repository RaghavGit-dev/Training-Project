import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsidebarComponentComponent } from './leftsidebar-component.component';

describe('LeftsidebarComponentComponent', () => {
  let component: LeftsidebarComponentComponent;
  let fixture: ComponentFixture<LeftsidebarComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftsidebarComponentComponent]
    });
    fixture = TestBed.createComponent(LeftsidebarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
