import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-loadlist',
  templateUrl: './loadlist.component.html',
  styleUrls: ['./loadlist.component.css']
})
export class LoadlistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backProj(){
    this.router.navigateByUrl('/auto-system');
  }

}
