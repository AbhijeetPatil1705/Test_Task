import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private service: UserService) { }
  profileForm = this.formBuilder.group({
    name: [''],
    domain: [''],
    gender: [''],
    dob: [''],
    mobile: [''],
    location: ['']
  })
  storedDataValue: any;
  ngOnInit(): void {
    this.service.getProductData().subscribe((res) => {
      this.service.userDataSubject(res)
    })
    this.service.getProductData().subscribe((res) => {
      this.storedDataValue = res;
      this.profileForm.patchValue({
        name: this.storedDataValue.name,
        domain: this.storedDataValue.domain,
        gender: this.storedDataValue.gender,
        dob: this.storedDataValue.dob,
        mobile: this.storedDataValue.mobile,
        location: this.storedDataValue.location
      })
    })
  }
  saveForm(val: any) {
    this.service.productData(val).subscribe((res) => {
      console.log(res);
    })
    alert("Your Data has been save");
  }
  updateForm(){}
}
