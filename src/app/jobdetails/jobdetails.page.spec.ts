import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobdetailsPage } from './jobdetails.page';

describe('JobdetailsPage', () => {
  let component: JobdetailsPage;
  let fixture: ComponentFixture<JobdetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
