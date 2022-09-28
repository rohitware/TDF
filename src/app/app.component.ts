import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
topics = [ 'Angular', 'React', 'Vue'];

userModel = new User('Rohit', 'rohit@gmail', 44434545545, '', 'morning', true)

}
