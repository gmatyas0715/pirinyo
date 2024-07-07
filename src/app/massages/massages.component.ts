import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Massage, MassageService } from '../massage.service';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-massages',
  standalone: true,
  imports: [RouterLink,MatChipsModule],
  providers:[Router],
  templateUrl: './massages.component.html',
  styleUrl: './massages.component.css'
})
export class MassagesComponent {

  massageTypes:Massage[] = []
  massageId:string = ""
  activeMassage:Massage|undefined
  constructor(private route:ActivatedRoute,private router:Router,private service:MassageService) {
    this.massageTypes = this.service.massageList
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.activeMassage = this.massageTypes.filter(m=>m.id === params['tipus'])[0]
      if (this.activeMassage==undefined){
        this.activeMassage = this.massageTypes[0]
      }
    });
  }

  massageSelectionChange(massage:Massage){
    if(this.activeMassage?.id==massage.id)return;
    this.activeMassage==massage
    this.router.navigate(['/masszazsok'], { queryParams: { tipus: massage.id } });
  }
}
