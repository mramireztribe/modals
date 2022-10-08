import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [BsModalService, BsModalRef]
})
export class ModalComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.modalService.onShown.subscribe((result) => { console.log("result", result); });
    // console.log("initialState", this._modalService.config.initialState);
  }

}
