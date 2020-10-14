import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValorLibPage } from './valor-lib.page';

describe('ValorLibPage', () => {
  let component: ValorLibPage;
  let fixture: ComponentFixture<ValorLibPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorLibPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValorLibPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
