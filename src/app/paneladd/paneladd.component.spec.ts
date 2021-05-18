import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneladdComponent } from './paneladd.component';

describe('PaneladdComponent', () => {
  let component: PaneladdComponent;
  let fixture: ComponentFixture<PaneladdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaneladdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneladdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
