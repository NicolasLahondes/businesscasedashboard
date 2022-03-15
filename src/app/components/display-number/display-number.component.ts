import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-number',
  templateUrl: './display-number.component.html',
  styleUrls: ['./display-number.component.css'],
})
export class DisplayNumberComponent implements OnInit {
  @Input() fontSizePushed: number;
  @Input() numberToDown: number;
  @Input() test: string;
  constructor() {}

  ngOnInit(): void {}

  generateStyle() {
    return {
      fontSize: this.fontSizePushed + 'px',
    };
  }
}
