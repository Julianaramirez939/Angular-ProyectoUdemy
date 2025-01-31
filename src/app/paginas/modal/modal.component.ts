import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgbModule, FormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  @ViewChild('myModalConf', { static: false }) myModalConf: TemplateRef<any>;
  modalTitle: string;
  usuario: any;
  paises: Array<any>;
  constructor(private modalService: NgbModal) {
    this.usuario = {
      nombre: '',
      correo: '',
      telefono: '',
      direccion: '',
      pais: '',
    };
  }

  ngOnInit(): void {
    this.paises = [
      { nombre: 'chile', dominio: 'cl' },
      { nombre: 'colombia', dominio: 'cn' },
      { nombre: 'china', dominio: 'ca' },
    ];
  }
  abrir() {
    this.modalService.open(this.myModalConf, { size: 'lg' });
    this.modalTitle = 'Ejemplo de ventana modal desde Angular';
  }
  enviar() {
    console.log(
      this.usuario.nombre +
        ' | ' +
        this.usuario.correo +
        ' |' +
        this.usuario.telefono +
        ' | ' +
        this.usuario.direccion +
        '|' +
        this.usuario.pais
    );
  }
}
