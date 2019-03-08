import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfpriyankaComponent } from './pdfpriyanka.component';

describe('PdfpriyankaComponent', () => {
  let component: PdfpriyankaComponent;
  let fixture: ComponentFixture<PdfpriyankaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfpriyankaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfpriyankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
