import { Component, OnInit } from '@angular/core';


import {Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private router: Router) { }

  city: string;
  hospital: string;
  ngOnInit(): void {
  }
  login(): void {
    if (this.city === 'Florida' && this.hospital === 'AdventHealth Orlando'){
      this.router.navigate(['/']);
    }else {
      alert('No result found');
    }
  }
}
