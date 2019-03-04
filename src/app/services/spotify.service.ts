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

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCqWT6zSicvSKRFuME1xm7Cj-Mtyhsi7bC2486KrWdSIvdnPQpMp-P93aXeDefVH85NaT-UUc3CEC5JVNiW2cIKE5wcqmHZmYFSLZKnnW8qpQVb-13MfDiNHfhclHCkTxS61DSrh_YNHIILHqHMPjHLSG2tBDO4mA'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=50', {headers});
   }
}
