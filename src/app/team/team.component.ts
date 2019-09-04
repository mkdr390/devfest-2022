import { Component, OnInit } from '@angular/core';
import team from '../../assets/json/team.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: any[] = [];
  leads: any[] = [];
  coreTeam: any[] = [];
  volunteerTeam: any[] = [];

  constructor() { }

  ngOnInit() {
    this.initTeam();
  }

  initTeam(): void {
    this.team = team.map(({ name, image, role }) => ({ name, image, role }));
  }

}
