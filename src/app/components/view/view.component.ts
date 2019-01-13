import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  name: String;

  allBlog: any;

  constructor(
    private data: DataService
  ) {
    // this.allData = data.getUserData();

  }

  ngOnInit() {
    this.display();
  }

  public display() {
    const userName = this.data.getUserData();
    this.name = userName.userDetails.name;
    this.data.getAllBlogs().subscribe(
      data => {
        this.allBlog = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
