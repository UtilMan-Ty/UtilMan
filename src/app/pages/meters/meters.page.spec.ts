import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetersPage } from './meters.page';

describe('MetersPage', () => {
  let component: MetersPage;
  let fixture: ComponentFixture<MetersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MetersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
