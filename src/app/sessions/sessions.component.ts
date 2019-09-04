import { Component, OnInit } from '@angular/core';
import session from '../../assets/json/session.json';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  speakersList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.initTeam();
  }

  initTeam(): void {
    this.speakersList = session.map(({
      sessionName,
      sessionStartTime,
      sessionEndTime,
      sessionColor,
      speakerName: name,
      speakerRole: role,
      speakerImage: image,
      twitter,
      github,
      linkedin,
      link,
      sessionDescription,
      speakerDescription
    }) => ({
      sessionName,
      sessionStartTime,
      sessionEndTime,
      sessionColor,
      name,
      role,
      image,
      twitter,
      github,
      linkedin,
      link,
      sessionDescription,
      speakerDescription
    }))
  }
}
