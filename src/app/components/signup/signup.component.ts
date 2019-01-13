import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: String;
  email: String;
  password: String;

  fullName: String;

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public signup = () => {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.data.signup(data).subscribe(
      res => {
        this.router.navigate(['/login']);
        console.log(res);
      }
    );


    console.log(data);
  }

}
