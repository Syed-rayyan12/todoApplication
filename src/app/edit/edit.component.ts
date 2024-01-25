import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  modal = inject(NgbActiveModal);
  
@Input() editData: any = '';
@Input() formType:string = '';
@Output() updateUser = new EventEmitter<object>();


  empDetail!: FormGroup; 
  constructor(private formBuilder : FormBuilder){}
 

  ngOnInit(){
    this.empDetail = this.formBuilder.group({
      id:[],
      customerName: [''],
      productName: [''],
      amount:[],
      date: []
    })
   
    if(this.formType == 'edit'){
      this.empDetail.patchValue({
        customerName:this.editData.customerName,
        productName:this.editData.productName,
        amount:this.editData.amount,
        date:this.editData.date,
        id:this.editData.id
      });
    }
  }
  



  editTodo(){
     this.updateUser.emit(this.empDetail)
     this.modal.close()
  }

}

