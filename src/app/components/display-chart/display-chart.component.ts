import { Component, Input, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-display-chart',
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.css'],
})
export class DisplayChartComponent implements OnInit {
  // Imported DATA from ProductService START
  @Input() products: Array<Product>;
  // Imported DATA from ProductService END

  // Chart Var START
  @Input() chartTitle: string;
  type: ChartType;
  labels: string[];
  datasets: ChartDataset[];
  options: ChartOptions;
  title: string;
  // Chart Var END

  constructor() {
    // Set Products within the service into the file

    // Chart parameters
    this.title = '';
    this.type = 'bar';
    this.labels = [];
    this.datasets = [
      {
        label: this.title,
        data: [],
        backgroundColor: ['#FFCB0C', '#273746'],
      },
    ];
    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          display: false,
          labels: { font: { size: 14 } },
        },
        title: {
          display: true,
        },
      },
    };
  }

  ngOnInit(): void {
    const returns = this.extractNbCmd();

    this.datasets[0].data = returns.nbCmds.slice(0, 5);
    this.labels = returns.names.slice(0, 5);

    // setTimeout(() => {this.labels = ["test"]}, 2000)
  }

  extractNbCmd(): { nbCmds: Array<any>; names: Array<any> } {
    const nbCmds: Array<any> = [];
    const names: Array<any> = [];

    this.products.forEach((element) => {
      nbCmds.push(element.nbCmd);
      names.push(element.name);
    });

    return { nbCmds, names };
  }
}
