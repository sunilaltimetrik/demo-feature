import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public show:boolean = true;
  public buttonName:string = 'Y';

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    this.show ? this.buttonName = "Y" : this.buttonName = "N";
  } 
}
