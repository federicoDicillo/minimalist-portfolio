import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyBoardManagerComponent } from './key-board-manager.component';

describe('KeyBoardManagerComponent', () => {
  let component: KeyBoardManagerComponent;
  let fixture: ComponentFixture<KeyBoardManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyBoardManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyBoardManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
