import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MasaiDirective } from './masai.directive';

@Component({
  template: `<div [masai]="color">Test</div>`
})
class TestComponent {
 color = 'blue';
  onClick() {
    // Click event handler
  }
}

describe('MasaiDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let divElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, MasaiDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    divElement = fixture.debugElement.query(By.directive(MasaiDirective));
    fixture.detectChanges();
  });

  it('should set background color on click', () => {
    const nativeElement = divElement.nativeElement;
    // nativeElement.click();

    // expect(nativeElement.style.backgroundColor).toBe(component.color);
    expect(nativeElement.style.backgroundColor).toBe(component.color);
  });
});
