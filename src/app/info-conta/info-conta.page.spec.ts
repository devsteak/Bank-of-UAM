import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoContaPage } from './info-conta.page';

describe('InfoContaPage', () => {
  let component: InfoContaPage;
  let fixture: ComponentFixture<InfoContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoContaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
