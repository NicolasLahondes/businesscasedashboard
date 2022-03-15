import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-panel',
  templateUrl: './first-panel.component.html',
  styleUrls: ['./first-panel.component.css'],
})
export class FirstPanelComponent implements OnInit {
  numberCaptured: number;
  date: any;
  arrayMonth: Array<string>;

  constructor() {
    this.numberCaptured = 8000;
    this.date = Date.now();
    this.arrayMonth = [
      'Janvier',
      'Fevrier',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];
  }

  ngOnInit(): void {}
}
