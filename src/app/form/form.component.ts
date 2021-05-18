import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  public phone: any[] = [{
    phoneNumber: null
  }];


  addNumber()
  {
      this.phone.push({phoneNumber:''})

  }

  removeNumber(i: any)
  {
    this.phone.splice(i,1)
  }

  onSubmit(data: any)
  {
      console.log(data.value)
  }
}
