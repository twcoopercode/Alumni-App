import { Component } from '@angular/core';

@Component({
  selector: 'app-tomstestbutton',
  standalone: true,
  imports: [],
  templateUrl: './tomstestbutton.component.html',
  styleUrl: './tomstestbutton.component.css'
})
export class TomstestbuttonComponent {

  test(){
    alert(";test");
  }

}
