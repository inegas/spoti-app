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
      'Authorization': 'Bearer BQBOgAoHDxJN5xys4JMToh-XDUNdua4NF0-FUT0624B1OxVRCZeMiFfHAdhwP1llsFXlT7_smxjefwDhuo4'
    });
    //Ahora mismo muestra 21 por página.
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=21&offset=0', {headers})
    .pipe(map((data:any) =>{
      return data.albums.items;
    }));
   }

   getArtists(name:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBOgAoHDxJN5xys4JMToh-XDUNdua4NF0-FUT0624B1OxVRCZeMiFfHAdhwP1llsFXlT7_smxjefwDhuo4'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${name}&type=artist&limit=21`, {headers});
   }
}
