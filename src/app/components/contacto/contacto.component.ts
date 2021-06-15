import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';

import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  // name   = new FormControl('');

  contactForm = this.fb.group({
    nombres: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', Validators.minLength(2)],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    info: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private fb: FormBuilder,
    private contactoService: ContactoService,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  onSubmit() {

    const data = this.contactForm.value;
    data.fecha = formatDate(Date.now(), 'short', 'en');
    data.pendiente = 'Si';

    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("solicitudes").add(data)
        .then(res => {
          (Swal as any).fire({
            title: 'Solicitud Recibida',
            text: 'Señor(a) '+ data.nombres + ', uno de nuestros asesores lo contactará pronto',
          });
        }, err => reject(err));
    });

  }

}
