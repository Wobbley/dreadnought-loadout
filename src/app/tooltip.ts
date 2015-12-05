import {Directive} from 'angular2/angular2'

@Directive({
	selector: '[tooltip]',
	inputs: [
		'text: tooltip'
	]
})
export class Tooltip {
	text: string;
	
  show() {
    console.log(this.text);
  }
}