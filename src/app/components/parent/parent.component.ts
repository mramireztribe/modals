import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [BsModalService]
})
export class ParentComponent implements OnInit {

  bsModalRef: BsModalRef | undefined;
  data: any = [];

  constructor(private http: HttpClient, private _modalService: BsModalService) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.data = data;
      console.log("this.data", this.data);
    });
  }

  openModal() {

    const initialState: any = { data: { name: 'Kenny' } };
    console.log("name", initialState);
    this.bsModalRef = this._modalService.show(ModalComponent, { class: 'modal-lg', initialState });
  }

}
