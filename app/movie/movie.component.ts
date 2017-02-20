import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [ BlogService]
})
export class MovieComponent implements OnInit 
{
  users:any[];

  constructor(public blogService: BlogService) { }


  ngOnInit() 
  {
    this.blogService
    .getUsers()
    .subscribe((data) => this.users = data);
  }

}
