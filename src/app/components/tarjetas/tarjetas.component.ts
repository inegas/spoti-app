import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  @Input() items:any[] =[];

  constructor(private route:Router) { }

  showArtist(item:any){
    let artistId:string;
    
    if(item.type === 'artist'){
      artistId = item.id;
    }else {
      artistId = item.id;
    }
    console.log('Id:' + artistId);
    this.route.navigate(['/artist', artistId]);
  }

}
