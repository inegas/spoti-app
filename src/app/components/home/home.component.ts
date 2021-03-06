import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

  newSongs:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService, ) {
    this.spotify.getNewReleases()
    .subscribe( (data:any) =>{
      console.log(data);
       this.newSongs = data;
       this.loading = false;
    });
  }


}
