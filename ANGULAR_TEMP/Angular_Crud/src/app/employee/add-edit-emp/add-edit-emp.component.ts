import { Component,  Input,  OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})


export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmpId:string | undefined;
  EmpName:string | undefined;
  EmpAge:string | undefined;
  EmpSalary:string | undefined;

  ngOnInit(): void {
    this.EmpId = this.emp.EmpId;
    this.EmpName = this.emp.EmpName;
    this.EmpAge = this.emp.EmpAge;
    this.EmpSalary = this.emp.EmpSalary;

  }

  addEmployee(){
    var val = {EmpId:this.EmpId = this.EmpId,
              EmpName:this.EmpName = this.EmpName,
              EmpAge:this.EmpAge = this.EmpAge,
              EmpSalary:this.EmpSalary = this.EmpSalary,
              }
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });          
  }

  updateEmployee(){
    var val = {EmpId:this.EmpId = this.EmpId,
      EmpName:this.EmpName = this.EmpName,
      EmpAge:this.EmpAge = this.EmpAge,
      EmpSalary:this.EmpSalary = this.EmpSalary,
      }
this.service.updateEmployee(val).subscribe(res=>{
alert(res.toString());
}); 
  }

}
