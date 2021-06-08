import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,
    private productService: ProductService
  ) {
  }

  @Input('product') product: Product;

  styleImage: any;

  ngOnInit(): void {
    this.styleImage = {
      'background-image': `url('${this.product.image}')`,
      'background-size': "cover"
    }
  }

  AddProduct() {

    const data = {
      "name": "aBVsaww",
      "marca": "aM11q",
      "ref": "E43Q",
      "price": 196,
      "status": "AC",
      "image": ["https://umbrocol.vteximg.com.br/arquivos/ids/181362-210-210/65321U-GRW-0-1.jpg?v=637026001062300000"]
    };
    this.productService.createProduct(data);
  }

  markCompleted(data: any) {
    this.productService.updateProduct(data);
  }

}
