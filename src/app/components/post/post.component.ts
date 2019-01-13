import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  titleB: String;
  descriptionB: String;
  blogBodyB: String;

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public createBlog() {
    const blogData = {
      title: this.titleB,
      description: this.descriptionB,
      blogBody: this.blogBodyB
    };

    this.data.postBlog(blogData).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/view']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
