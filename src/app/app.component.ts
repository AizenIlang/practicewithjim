import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PRACTICE WITH JIM';

  Username : any;
  Password : any;


  Login(){
    this.title = "Your Username is "+ this.Username + " Password is " + this.Password;
  }
}
