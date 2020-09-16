import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router} from '@angular/router';
import { Load } from 'src/app/models/Load/Load';
import { LOADS } from 'src/app/models/Load/loads.json';

@Component({
  selector: 'app-loadlist',
  templateUrl: './loadlist.component.html',
  styleUrls: ['./loadlist.component.css']
})
export class LoadlistComponent implements OnInit {

  loadsList: Load[];

  constructor(private router: Router) {
    this.loadsList = LOADS;
   }

  ngOnInit(): void {
  }

  backProj(){
    this.router.navigateByUrl('/auto-system');
  }


}
