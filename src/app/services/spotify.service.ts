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
      'Authorization': 'Bearer BQCr4pLT4EBmsQynSduEYCzxLc68lndc3V1t8uyuoBFRpPqNA8wE_UMu-xPnxAunoLKt59OUp-oKB1cuLyo'
    });
    //Ahora mismo muestra 21 por página.
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=21&offset=0', {headers});
   }
}
