import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  providers: [UsersService],
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})

export class RegisterPageComponent {
  constructor(private usersService: UsersService, private router: Router, private renderer: Renderer2) {
    this.renderer.setStyle(
      document.body,
      'background-image',
      'url(https://steamuserimages-a.akamaihd.net/ugc/454110978798692999/ED874C3AF73B6B74E1AF4E2BFBBEEB2DEDFAACB3/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)'
    );
  }

  user = {
    login: '',
    name: '',
    password: ''
  };

  async onSubmit() {
    let res = this.usersService.registerUser(this.user.login, this.user.name, this.user.password).subscribe((response: User) => {
        console.log('user');
        this.router.navigate(['/']);
    });
  }

login(){
  this.router.navigate(['/']);
}
}
