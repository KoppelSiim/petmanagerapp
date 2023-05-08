import { Component, OnInit } from '@angular/core';
import { Pets } from './pets';
import { PetsService } from './pets.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'petmanagerapp';
  showAppContent = true;
  public pets!: Pets[];
  constructor(private petsService: PetsService) { }

  ngOnInit() {
      this.getPets();
  }
  public getPets(): void {
    this.petsService.getPets().subscribe(
      (response: Pets[]) => {
        this.pets = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
