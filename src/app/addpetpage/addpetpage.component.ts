import { Component,OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { PetsService } from '../pets.service';
import { Observable } from 'rxjs';
import { Pets } from '../pets';
import { environment } from 'src/environments/environments';
@Component({
  selector: 'app-addpetpage',
  templateUrl: './addpetpage.component.html',
  styleUrls: ['./addpetpage.component.css']
})
export class AddpetpageComponent implements OnInit{
  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.showAppContent = false;
  }
}

