import { DatePipe, formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private firestore: AngularFirestore) { }

  createProduct(data: any) {

    data.fecha = formatDate(Date.now(), 'short', 'en');
    data.pendiente = 'Si';

    new Promise<any>((resolve, reject) => {
      const newCityRef = this.firestore.collection("solicitudes").doc();
      data.id = newCityRef.ref.id;
      newCityRef.set(data)
        .then(res => { console.log(res) }, err => reject(err));
    });

  }

}