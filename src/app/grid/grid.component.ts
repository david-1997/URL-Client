import { Component, OnInit } from '@angular/core';
import { URLService } from '../url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  list;
  constructor(private URL:URLService, private router: Router) {
    this.URL.getURLs().subscribe((data) => {
      this.list = data;
    })
  }
  ngOnInit(): void {
  }

}
