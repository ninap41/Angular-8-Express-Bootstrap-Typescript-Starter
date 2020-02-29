import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDemoComponent } from './mongo-demo.component';

describe('MongoDemoComponent', () => {
  let component: MongoDemoComponent;
  let fixture: ComponentFixture<MongoDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
