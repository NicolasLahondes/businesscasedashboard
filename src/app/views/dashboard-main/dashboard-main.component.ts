import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductsService } from "src/app/services/products/products.service";
import { Product } from "../../models/product.model";

@Component({
  selector: "app-dashboard-main",
  templateUrl: "./dashboard-main.component.html",
  styleUrls: ["./dashboard-main.component.css"],
})
export class DashboardMainComponent implements OnInit {
  currentSection = "section1";

  // Services data START
  products: Array<Product>;
  productsSub: Subscription;
  // Services data END

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    // Allow to get all the data drom ProductService available
    this.productsSub = this.productService.products.subscribe(
      (products: Array<Product>) => {
        this.products = products;
        // Sort by number of commands using sort.
        this.products.sort((low, high) => high.nbCmd - low.nbCmd);
      }
    );
  }
}
