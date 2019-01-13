import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;


  // private allData: any;

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login () {
    const data = {
      email: this.email,
      password: this.password
    };
    this.data.login(data).subscribe(
      res => {
        this.data.setUserData(res);
        // this.allData = res;
        this.router.navigate(['/view']);
        console.log(res);
      }
    );
    console.log(data);
  }


}
