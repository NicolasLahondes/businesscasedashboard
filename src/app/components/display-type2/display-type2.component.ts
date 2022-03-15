import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-display-type2',
  templateUrl: './display-type2.component.html',
  styleUrls: ['./display-type2.component.css'],
})
export class DisplayType2Component implements OnInit {
  @Input() nameInfo: string;
  @Input() numberPassed: number;
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {}
}
