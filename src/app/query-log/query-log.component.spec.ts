import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryLogComponent } from './query-log.component';

describe('QueryLogComponent', () => {
  let component: QueryLogComponent;
  let fixture: ComponentFixture<QueryLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
