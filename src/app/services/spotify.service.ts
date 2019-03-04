import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



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
      'Authorization': 'Bearer BQAT_e1qnIbmgt34n7FguUsVXxB3h-KEnwNcrm7HbAVtikCV7eSk9QdCYG8Q26WBeO-OAEQaxm4HPsByX0s'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=50', {headers});
   }
}
