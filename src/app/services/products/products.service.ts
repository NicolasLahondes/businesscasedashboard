import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: BehaviorSubject<Array<Product>>;

  constructor() {
    const productToPush = [
      new Product(
        'FR000001',
        'Niche-lin',
        150.14,
        200,
        'Avec Niche-lin, un chien qui tiens la route',
        124,
        'https://picsum.photos/210'
      ),
      new Product(
        'FR000002',
        'Collier Goth-chien',
        37,
        20,
        'Un collier qui ne manque pas de piquant (Vrai cuir)',
        52,
        'https://picsum.photos/209'
      ),
      new Product(
        'FR000003',
        'Sac Croquette',
        37,
        20,
        'Un collier qui ne manque pas de piquant (Vrai cuir)',
        34,
        'https://picsum.photos/208'
      ),
      new Product(
        'FR000004',
        'Sac Croquette Premium',
        37,
        20,
        'Le meilleur pour votre chien',
        40,
        'https://picsum.photos/207'
      ),
      new Product(
        'FR000005',
        'Os Magique',
        37,
        20,
        'Pour renforcer les dents de votre chien',
        200,
        'https://picsum.photos/206'
      ),
      new Product(
        'FR000006',
        'Laisse pour mygale',
        37,
        20,
        'Pour ne plus risquer de la perdre en balade',
        65,
        'https://picsum.photos/205'
      ),
      new Product(
        'FR000007',
        'Coussin pour chat',
        37,
        20,
        'Chat-buleux',
        68,
        'https://picsum.photos/204'
      ),
      new Product(
        'FR000008',
        'Croquette Maladoux',
        37,
        20,
        'Pour les chiens malades',
        13,
        'https://picsum.photos/203'
      ),
      new Product(
        'FR000009',
        'Laisse XXL avec diamant',
        37,
        20,
        'Pour princesse',
        12,
        'https://picsum.photos/202'
      ),
      new Product(
        'FR000010',
        'Bocal Neptune',
        37,
        20,
        'Un bocal pour les gouverner tous',
        6,
        'https://picsum.photos/201'
      ),
    ];

    this.products = new BehaviorSubject<Array<Product>>(productToPush);
  }
}
