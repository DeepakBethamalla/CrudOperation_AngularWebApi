import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditEmpComp:boolean = false;
  @Input() emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmpId:0,
      EmpName:"",
      EmpAge:0,
      EmpSalary:0
    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;
  }

  editClick(item: any){
    this.emp=item;
    this.ModalTitle =  "Add Employee";
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteEmployee(item.EmpId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

}
