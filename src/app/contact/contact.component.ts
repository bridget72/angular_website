import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = "";
  email = "";
  message= "";

  constructor(){}

  ngOnInit(){}

  submitForm(){
    const message = "Send my message from "+this.email+"?";
    // grab all the fields and their values 
    alert(message);
    
  }

}
