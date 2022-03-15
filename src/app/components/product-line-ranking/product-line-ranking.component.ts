import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-line-ranking',
  templateUrl: './product-line-ranking.component.html',
  styleUrls: ['./product-line-ranking.component.css'],
})
export class ProductLineRankingComponent implements OnInit {
  @Input() productName: string;
  @Input() totalSales: number;
  @Input() id: number;
  @Input() photoPath: string;
  constructor() {}

  ngOnInit(): void {}
}
