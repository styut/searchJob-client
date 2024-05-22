
// import { Component, ViewChild } from '@angular/core';
// import { UserService } from '../../service/user.service';
// import { User } from '../../models/user';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router'; // Import Router for navigation

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   newUser: User = { id: 0, username: '', password: '', jobSearchField: ''};
//   User: User = { id: 0, username: '', password: '', jobSearchField: '' }; // Not needed

//   @ViewChild('f') f: NgForm | null = null;

//   constructor(private userService: UserService, private router: Router) { }

//   signUp() {
//     this.userService.getUser(this.User.username, this.User.password).subscribe(res => {
//       this.newUser = res;
//       if (this.newUser) {
//         alert('Connected!');
//         this.router.navigate(['/']); 
//         alert('Invalid username or password.');
//       }
//     });
//   }
// }

import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  newUser: User = { id: 0, username: '', password: '', jobSearchField: ''};
  User: User = { id: 0, username: '', password: '', jobSearchField: '' }; 
  @ViewChild('f') f: NgForm | null = null;

  constructor(private userService: UserService, private router: Router) { }

  signUp() {
    this.userService.getUser(this.newUser.username, this.newUser.password).subscribe(res => {
      if (res) {
        alert('Connected!');
        this.router.navigate(['/']); 
      } else {
        alert('Invalid username or password.');
      }
    });
  }
}
