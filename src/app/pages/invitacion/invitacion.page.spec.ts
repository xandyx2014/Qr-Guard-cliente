import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvitacionPage } from './invitacion.page';

describe('InvitacionPage', () => {
  let component: InvitacionPage;
  let fixture: ComponentFixture<InvitacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvitacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
