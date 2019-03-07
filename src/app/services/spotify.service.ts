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
      'Authorization': 'Bearer BQDQ2FqmUWM_9IJwT1oq--rf9r_P5QCnSAukRc47XbfqtOXR_deQka25cc2yipQHcuqAzi0kI3FnpVzzLno'
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
    //.pipe(map((data:any) => data.artists.items));
    
   }
}
