import {Injectable} from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class LeagueApi {

  API_URL = "http://localhost:3000/league";

  getSummonerByName = async (summonerName: string, region: string): Promise<any> => {
    let url = new URL(`${this.API_URL}/summoner-by-name`)
    let params: any = {summonerName, region}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url)
     .then(response => response.json())
  }

  getRegions = async () : Promise<any> => {
    return fetch(`${this.API_URL}/regions`).then(response => response.json())
  }
}
