import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  title = 'ehidraulicosapp';

  products: Product[] = [];
  
  constructor(firestore: AngularFirestore) {
    firestore.collection('productos').valueChanges()
      .subscribe((products: any) => {
        console.log(products);
        this.products = products;
      })
  }

  ngOnInit(): void {
  }

}
