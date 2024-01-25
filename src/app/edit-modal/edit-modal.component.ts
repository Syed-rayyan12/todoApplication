import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {


  modal = inject(NgbActiveModal);
  
  empDetail !: FormGroup; 

  @Output() addConfirm = new EventEmitter<any>();
  constructor(private formBuilder : FormBuilder){}
 
  ngOnInit(){
    this.empDetail = this.formBuilder.group({
      id:[Math.floor(Math.random() * 10000000)],
      customerName: [''],
      productName: [''],
      amount:[],
      date: [],
      
    })
  }

  addTasks(){
   // console.log(this.empDetail);
    this.addConfirm.emit(this.empDetail.value);  
    this.modal.close() 
  }


 
}
