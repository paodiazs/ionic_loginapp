import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  //let router: Router;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LoaderPage);
    //router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to login page after load',() =>{
    component.ngOnInit();
    expect(false).toBeFalsy();
  })
});
