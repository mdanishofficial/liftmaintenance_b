import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceTechnicianDetailPage } from './maintenance-technician-detail.page';

describe('MaintenanceTechnicianDetailPage', () => {
  let component: MaintenanceTechnicianDetailPage;
  let fixture: ComponentFixture<MaintenanceTechnicianDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceTechnicianDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceTechnicianDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
