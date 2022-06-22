import { Component, ElementRef, forwardRef, Input, OnInit, Optional, Renderer2, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-numeric-field',
  templateUrl: './numeric-field.component.html',
  styleUrls: ['./numeric-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumericFieldComponent),
      multi: true
    }
  ]
})
export class NumericFieldComponent implements OnInit, ControlValueAccessor{
  @Input() public formControlName: string;

  @ViewChild('inputfield') protected input: ElementRef;

  public formGroup: FormGroup;

  onChange: any = () => {}
  onTouch: any = () => {}

  innerValue = "";

  constructor(
    @Optional() protected controlContainer: ControlContainer,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.formGroup = <FormGroup>this.controlContainer.control;
  }

  ngAfterViewInit(): void {
    this.renderer.setProperty(
      this.input.nativeElement,
      'value',
      this.innerValue
    );
  }

  set value(val: number) {
    this.innerValue = '-' + val + '-';
  }

  writeValue(value: number){
    this.value = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }

  change($event: any) {
    let inputValue = $event.target.value;
    inputValue = inputValue.replace(/-/g, "");
    this.onChange(parseInt(inputValue));
  }

}
