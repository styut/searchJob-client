import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeResumeComponent } from './make-resume.component';

describe('MakeResumeComponent', () => {
  let component: MakeResumeComponent;
  let fixture: ComponentFixture<MakeResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
