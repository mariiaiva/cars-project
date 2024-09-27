import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [UsersService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})

export class LoginPageComponent {
  constructor(private usersService: UsersService, private router: Router, private renderer: Renderer2) {
    this.renderer.setStyle(
      document.body,
      'background-image',
      'url(https://steamuserimages-a.akamaihd.net/ugc/454110978798692999/ED874C3AF73B6B74E1AF4E2BFBBEEB2DEDFAACB3/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)'
    );
  }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    
    if(!userId)
      return;

    this.usersService.getUserById(userId).subscribe((user: User) => {
      this.router.navigate(['/auth/maintenance']).then(() => {window.location.reload();})
    })
  }

  user = {
    login: '',
    password: ''
  };

  onSubmit() {

    let res = this.usersService.loginUser(this.user.login, this.user.password).subscribe((user: User) => {
      localStorage.setItem('userId', user._id);
      this.router.navigate(['/auth/maintenance']).then(() => {window.location.reload();})
    });

    console.log(res, this.user);
  }
}
