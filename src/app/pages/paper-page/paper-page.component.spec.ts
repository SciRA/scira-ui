import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperPageComponent } from './paper-page.component';

describe('PaperPageComponent', () => {
  let component: PaperPageComponent;
  let fixture: ComponentFixture<PaperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
