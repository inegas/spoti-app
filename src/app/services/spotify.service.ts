import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('servicio funcionando'); 
   }

   getQuery(query:string){
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB0mmnkmQgoiLnH0h7j2LPQOycdgZRAE0or-84_N7k41xSShgu4k-5fGW7HYezmQFVQXvKarO1Q_hh7Ac8'
    });

    return this.http.get(url, {headers});
   }
   //Ahora mismo muestra 21 por página.
   getNewReleases(){
    return this.getQuery('browse/new-releases?limit=21&offset=0')
    .pipe(map((data:any) => data.albums.items));
   }

   getArtists(name:string){
    return this.getQuery(`search?q=${name}&type=artist&limit=21`) 
    .pipe(map((data:any) => data.artists.items));
    
   }

   getArtist(id:string){
    return this.getQuery(`artists/${id}`); 
    
    
   }

   getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data:any) => data.tracks));
   }
}
