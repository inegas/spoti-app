import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artist:any = {};
  loading:boolean;

  constructor(private aroute:ActivatedRoute, private spotify:SpotifyService) {

    this.loading = true;

    this.aroute.params.subscribe(params =>{
      console.log(params);
      this.showArtist(params['id']);
    });
   }
  
   showArtist(id:string){
      this.loading = true;
      this.spotify.getArtist(id).subscribe(params =>{
        console.log(params);
        this.artist = params;
        this.loading = false;
      });
  }
}
