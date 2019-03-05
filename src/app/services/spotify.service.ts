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

   getNewReleases(){

    //Automatizar generacion del token, solo dura una hora.
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC-lpWy6GMHuLJ4J6cZ_5sNg8dvieyic3tmeOKvPQNlLbwiJ40qDCNbO34MS0pSuIehg352R-2HZGCrQMk'
    });
    //Ahora mismo muestra 21 por página.
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=21&offset=0', {headers})
    .pipe(map((data:any) => data.albums.items));
   }

   getArtists(name:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC-lpWy6GMHuLJ4J6cZ_5sNg8dvieyic3tmeOKvPQNlLbwiJ40qDCNbO34MS0pSuIehg352R-2HZGCrQMk'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${name}&type=artist&limit=21`, {headers})
    .pipe(map((data:any) => data.artists.items));
   }
}
