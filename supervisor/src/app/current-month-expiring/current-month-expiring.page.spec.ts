import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentMonthExpiringPage } from './current-month-expiring.page';

describe('CurrentMonthExpiringPage', () => {
  let component: CurrentMonthExpiringPage;
  let fixture: ComponentFixture<CurrentMonthExpiringPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMonthExpiringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentMonthExpiringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
