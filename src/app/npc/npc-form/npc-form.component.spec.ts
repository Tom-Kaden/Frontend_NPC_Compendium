import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcFormComponent } from './npc-form.component';

describe('NpcFormComponent', () => {
  let component: NpcFormComponent;
  let fixture: ComponentFixture<NpcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
