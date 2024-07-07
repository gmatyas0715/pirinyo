import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { Massage, MassageService } from '../massage.service';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatSidenavModule,FooterComponent,MatCardModule,MatGridListModule,MatButtonModule,RouterLink,MatIconModule,NgClass],
  providers: [Router],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

  classVisible:boolean = true
  currentUrlIndex:number=0
  carouselPicList:string[] = ["assets/carousel1.jpg","assets/carousel2.jpg","assets/carousel3.jpg"]

  massageTypes:Massage[] = []
  constructor(private service:MassageService) {
    this.massageTypes = this.service.massageList
  }

  nextPic(){
    if (this.currentUrlIndex==this.carouselPicList.length-1)return
    this.classVisible=false
    setTimeout(() => {
      this.currentUrlIndex++
      this.classVisible=true
    }, 300);
  }

  previousPic(){
    if (this.currentUrlIndex==0)return
    this.classVisible=false
    setTimeout(() => {
    this.currentUrlIndex--
    this.classVisible=true
    }, 300);
  }
}
