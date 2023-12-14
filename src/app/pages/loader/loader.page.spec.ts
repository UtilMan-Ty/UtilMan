import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { IonicModule } from '@ionic/angular';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(LoaderPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
        router= TestBed.get(Router);
      });
  }));

  it('should go to loging page after load',() =>{
    spyOn(router, 'navigate');
  component.ngOnInit

  expect(router.navigate).toHaveBeenCalledWith(['alerts'])}
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
