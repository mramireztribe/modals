import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [BsModalService, BsModalRef]
})
export class ModalComponent implements OnInit {

  data: any = [];
  constructor(private modalService: BsModalService, private modalRef: BsModalRef) { }

  ngOnInit(): void {
    console.log("Fuck You Kenny!", this.data);
  }

}
