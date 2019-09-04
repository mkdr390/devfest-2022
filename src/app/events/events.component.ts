import { Component, OnInit } from '@angular/core';
import session from '../../assets/json/session.json';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  speakersList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.initTeam();
  }

  initTeam(): void {
    this.speakersList = session.filter(item => item.speaker).map(({
      sessionName,
      sessionStartTime,
      sessionEndTime,
      sessionColor,
      speakerName: name,
      speakerRole: role,
      speakerImage: image,
      speakerDescription: description,
      linkedin
    }) => ({
      sessionName,
      sessionStartTime,
      sessionEndTime,
      sessionColor,
      name,
      role,
      image,
      linkedin
    }));
  }

}
