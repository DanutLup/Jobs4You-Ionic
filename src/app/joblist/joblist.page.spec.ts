import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoblistPage } from './joblist.page';

describe('JoblistPage', () => {
  let component: JoblistPage;
  let fixture: ComponentFixture<JoblistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JoblistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
