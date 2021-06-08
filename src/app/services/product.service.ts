import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  createProduct(data: any) {
    return new Promise<any>((resolve, reject) => {
      const newCityRef = this.firestore.collection("productos").doc();
      data.id = newCityRef.ref.id;
      newCityRef.set(data)
        .then(res => { console.log(res) }, err => reject(err));
    });
  }

  updateProduct(data: any) {

    return new Promise<any>(() => {
      this.firestore
        .collection("productos")
        .doc(data.id)
        .set(data);
    });

  }
}
