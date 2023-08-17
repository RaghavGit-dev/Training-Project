import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsidebarComponentComponent } from './rightsidebar-component.component';

describe('RightsidebarComponentComponent', () => {
  let component: RightsidebarComponentComponent;
  let fixture: ComponentFixture<RightsidebarComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightsidebarComponentComponent]
    });
    fixture = TestBed.createComponent(RightsidebarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
