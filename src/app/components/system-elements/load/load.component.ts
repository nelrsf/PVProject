import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadClick()
  {
    this.router.navigateByUrl('/load-list');
  }

}
