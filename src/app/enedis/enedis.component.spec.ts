import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnedisComponent } from './enedis.component';

describe('EnedisComponent', () => {
  let component: EnedisComponent;
  let fixture: ComponentFixture<EnedisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnedisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnedisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
