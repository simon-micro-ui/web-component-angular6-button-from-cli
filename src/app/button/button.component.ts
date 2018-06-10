// Simon: Added Input, Output, and EventEmitter.
import { 
  Input, 
  Component, 
  ViewEncapsulation, 
  EventEmitter, 
  Output 
} from '@angular/core';

// Simon: Updated template and styles.
@Component({
  selector: 'custom-button',
  template: `<button (click)="handleClick()">{{label}}</button>`,
  styles: [`
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: #bada55;
      font-size: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {

  constructor() { 
    console.log(">>> ButtonComponent.constructor <<<");
  }

  ngOnInit() {
    console.log(">>> ButtonComponent.ngOnInit <<<");
  }

  // Simon: Added content below.
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private clicksCt = 0;

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }
}
