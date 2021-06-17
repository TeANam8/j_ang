import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataSharedService } from '../shared/data-shared.service'
@Component({
  selector: 'app-form-part',
  templateUrl: './form-part.component.html',
  styleUrls: ['./form-part.component.css']
})
export class FormPartComponent implements OnInit {
  f_n;
  l_n;
  em;
  rl;
  st;
  zp_c;
  emp_arr=[];
  constructor(private shared: DataSharedService) { }
  
  formdata;
  ngOnInit(): void {
    this.formdata = new FormGroup({
      f_name: new FormControl(""),
      l_name: new FormControl(""),
      email: new FormControl(""),
      role: new FormControl(""),
      state: new FormControl(""),
      zip_code: new FormControl("")
   });
  }
  onClickSubmit(data) {
    this.f_n = data.f_name;
    this.l_n = data.l_name;
    this.em = data.email;
    this.st = data.state;
    this.rl = data.role;
    this.zp_c = data.zip_code;
    let emp_person: Employee = {
      f_name : this.f_n,
      l_name : this.l_n,
      email: this.em,
      role : this.rl,
      state: this.st,
      zipcode: this.zp_c
    }
    this.emp_arr.push(emp_person);
    this.shared.setMessage(this.emp_arr);
  }

}
