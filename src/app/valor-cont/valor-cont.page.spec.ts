import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValorContPage } from './valor-cont.page';

describe('ValorContPage', () => {
  let component: ValorContPage;
  let fixture: ComponentFixture<ValorContPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorContPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValorContPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
