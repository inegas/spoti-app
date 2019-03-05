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
      'Authorization': 'Bearer BQC-lpWy6GMHuLJ4J6cZ_5sNg8dvieyic3tmeOKvPQNlLbwiJ40qDCNbO34MS0pSuIehg352R-2HZGCrQMk'
    });

    return this.http.get(url, {headers});
   }
   //Ahora mismo muestra 21 por página.
   getNewReleases(){
    return this.getQuery('browse/new-releases?limit=21&offset=0')
    .pipe(map((data:any) => data.albums.items));
   }

   getOtherQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC-lpWy6GMHuLJ4J6cZ_5sNg8dvieyic3tmeOKvPQNlLbwiJ40qDCNbO34MS0pSuIehg352R-2HZGCrQMk'
    });
    return this.http.get(url, {headers});
   }

   getArtists(name:string){
    return this.getOtherQuery(`search?q=${name}&type=artist&limit=21`) 
    .pipe(map((data:any) => data.artists.items));
    
   }
}
