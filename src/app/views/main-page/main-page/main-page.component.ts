import {Component, ViewEncapsulation} from '@angular/core';
import {LeagueApi} from "../../../services/league.api";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent {

  constructor(private  leagueApi: LeagueApi) {
  }


  async sendRequest() {
    let result = await this.leagueApi.getSummonerByName("mononised", "LAT_NORTH")
    let regions = await this.leagueApi.getRegions();
    console.log(result)
  }

  options: Array<any> = [
    {
      id: 'NA',
      value: "NA",
    },
    {
      id: 'LAN',
      value: "LAN",
    },
    {
      id: 'LAS',
      value: "LAS",
    },
  ];
}
