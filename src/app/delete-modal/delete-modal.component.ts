import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent {
	modal = inject(NgbActiveModal);
  @Output() deleteConfirm = new EventEmitter<boolean>();

  ngOnInit() {

  }

  deleteTask(e: boolean) {
    console.log('e', e);
    this.deleteConfirm.emit(e);
    this.modal.close();
  }

}
