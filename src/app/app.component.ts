import {  Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProfileComponent} from './profile/profile.component'
import { UserService } from './service/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test';
  storeData: any | undefined = "";
  selectedDataById: any;
  currentId: any;
  tableReactiveForm: any;
  ngOnInit() {

    this.service.userSubject.subscribe((res) => {
      this.storeData = res;
      console.log("response", res)
    })
  }
  constructor(public dialog: MatDialog, private service: UserService) {
    this.service.getProductData().subscribe((res) => {
      this.storeData = res;
    })
  }
  openDialog() {
    this.dialog.open(ProfileComponent);
  }
}
