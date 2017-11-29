import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSciraComponent } from './about-scira.component';

describe('AboutSciraComponent', () => {
  let component: AboutSciraComponent;
  let fixture: ComponentFixture<AboutSciraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSciraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSciraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
