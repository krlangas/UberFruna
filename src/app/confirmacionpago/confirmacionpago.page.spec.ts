import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionpagoPage } from './confirmacionpago.page';

describe('ConfirmacionpagoPage', () => {
  let component: ConfirmacionpagoPage;
  let fixture: ComponentFixture<ConfirmacionpagoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmacionpagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
