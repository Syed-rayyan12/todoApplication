import { Component, ViewChild, inject } from '@angular/core';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'

})
export class TablesComponent {
  selectedItemId: string = '';
  openDeleteModal: boolean = false;

  private modalService = inject(NgbModal);


  list = [

    {
      id: "#TB010331",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },
    {
      id: "#TB010332",
      customerName: "Terry White",
      productName: "Macbook Pro",
      amount: "$658.00",
      date: "28 Oct, 2022"
    },


  ]

  deleteItem(id: string) {
    console.log(id)
    this.selectedItemId = id;
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.deleteConfirm.subscribe((arg: boolean) => {
      if (arg) {
        this.deleteConfirm();
      }
    });
  }

  deleteConfirm() {
    let deletedIndex = this.list.findIndex((item) => { return item.id == this.selectedItemId });
    this.list.splice(deletedIndex, 1);
  }

  addConfirm() {  
  /*  this.addConfirm.empdetail.subscribe((arg: Boolean) => {
         if(arg){
           this.list.push(this.item)
         }
      });*/
      const modalRef = this.modalService.open(EditModalComponent);
      modalRef.componentInstance.addConfirm.subscribe((arg: any) => {
        if (arg) {
  //        this.deleteConfirm();
      console.log(arg)
      this.list.push(arg)
        }
      });
  }

  editTask(todoData:any){
    const modalRef = this.modalService.open(EditComponent);
     modalRef.componentInstance.editData = todoData
     modalRef.componentInstance.formType = 'edit'
     modalRef.componentInstance.updateUser.subscribe((arg: any) =>{
       if(arg){
        console.log(arg.value)
        const index = this.list.findIndex(obj => {
          return obj.id === todoData.id;
        });
        this.list[index] = arg.value
        console.log(index);
        
       }
     });
      
  }

}






