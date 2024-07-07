import { Injectable } from '@angular/core';

export interface Massage{
  id:string;
  name:string;
  leirasUrl:string;
  imgUrl:string;
}

@Injectable({
  providedIn: 'root'
})
export class MassageService {

  private massages: Massage[] = [
    {id:"nyirok",name:"Nyirokmasszázs",leirasUrl:"assets/nyirokLeiras.jpg",imgUrl:"assets/nyirok.jpg"},
    {id:"lomilomi",name:"Lomi Lomi masszázs",leirasUrl:"assets/lomilomiLeiras.jpg",imgUrl:"assets/lomilomi.jpg"},
    {id:"lavako",name:"Lávaköves masszázs",leirasUrl:"assets/lavakoLeiras.jpg",imgUrl:"assets/lavako.jpg"},
    {id:"kokusz",name:"Kókuszos masszázs",leirasUrl:"assets/kokuszLeiras.jpg",imgUrl:"assets/kokusz.jpg"},
    {id:"kinai",name:"Kínai masszázs",leirasUrl:"assets/kinaiLeiras.jpg",imgUrl:"assets/kinai.jpg"},
    {id:"joghurt",name:"Joghurtos masszázs",leirasUrl:"assets/joghurtLeiras.jpg",imgUrl:"assets/joghurt.jpg"},
    {id:"himalajaso",name:"Himalája sómasszázs",leirasUrl:"assets/himalajasoLeiras.jpg",imgUrl:"assets/himalajaso.jpg"},
    {id:"csokolade",name:"Csokoládé masszázs",leirasUrl:"assets/csokoladeLeiras.jpg",imgUrl:"assets/csokolade.jpg"},
    {id:"bambusz",name:"Bambusz masszázs",leirasUrl:"assets/bambuszLeiras.jpg",imgUrl:"assets/bambusz.jpg"},
    {id:"abhyanga",name:"Abhyanga masszázs",leirasUrl:"assets/abhyangaLeiras.jpg",imgUrl:"assets/abhyanga.jpg"}
  ]

  constructor() { }
  
  public get massageList() : Massage[] {
    return this.massages
  }
}
