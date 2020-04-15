import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '8028411451a3acb0915829e37778e3ad3f7c1911';
  private clientsecret = '8028411451a3acb0915829e37778e3ad3f7c1911';
  constructor(private http: Http) {
    console.log("service is now ready!");
    this.username = "Abasshussein";
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }
  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
