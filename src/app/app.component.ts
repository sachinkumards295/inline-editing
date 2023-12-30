import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'angularPractice';

  userData:any;
  oldObj:any;


  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.loadAllUser();

  }


  loadAllUser(){
   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=> {
   this.userData = res;
   });
  }

  edit(itemObj:any){
    this.oldObj = JSON.stringify(itemObj);
    this.userData.forEach((element:any) => {
      element.isEdit = false;
    });
itemObj.isEdit = true
  }

  Add(){
    const obj = {
      "id": 1,
      "name": "",
      "username": "",
      "email": "",
      "phone": " ",
      "website": "",
      isEdit:true
    }

    this.userData.unshift(obj);
  }

  update(obj:any){
    debugger
  }

  cancel(obj:any){
    let ObjNew = JSON.parse(this.oldObj);
    obj.id = ObjNew.id
    obj.name = ObjNew.name;
    obj.username = ObjNew.username;
    obj.email = ObjNew.email;
    obj.phone = ObjNew.phone;
    obj.website = ObjNew.website;
obj.isEdit = false;
  }


  
}
