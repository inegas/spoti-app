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
  topTracks:any[] = [];
  loading:boolean;

  constructor(private aroute:ActivatedRoute, private spotify:SpotifyService) {

    this.loading = true;

    this.aroute.params.subscribe(params =>{
      console.log(params);
      this.showArtist(params['id']);
      this.showTopTracks(params ['id']);
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

  showTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(params =>{
      console.log(params);
      this.topTracks = params;
    })
  }
}
