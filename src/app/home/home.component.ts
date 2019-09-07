import { Component, OnInit } from '@angular/core';
import basics from '../../assets/json/basics.json';
import sponsors from '../../assets/json/sponsors.json';
import partners from '../../assets/json/partners.json';
import session from '../../assets/json/session.json';
import collaborators from '../../assets/json/collaborators.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  speakersList: any[] = [];
  partnersList: any[] = [];
  sponsorsList: any[] = [];
  collaboratorsList: any[] = [];
  communityName: string;
  communityEmail: string;
  communityMobile: string;
  logoPath: string;
  facebookPath: string;
  twitterPath: string;
  instagramPath: string;
  eventLocation: string;
  eventDate: string;
  registrationPath: string;
  meetupPath: string;
  meetupAPIKey: string;
  deadline;

  constructor() { }

  ngOnInit() {
    this.initBasics();
    this.initSpeakers();
    this.initSponsors();
    this.initPartners();
    this.initCollaborators();
  }

  initBasics(): void {
    this.logoPath = basics["logo-path"];
    this.meetupPath = "https://meetup.com/" + basics["meetup-slug"];
    this.meetupAPIKey = basics["meetup-api-key"];
    this.communityEmail = basics["email"];
    this.eventLocation = basics["eventLocation"];
    this.eventDate = basics["eventDate"];
    this.deadline = new Date(this.eventDate);
    this.communityMobile = basics["mobile"];
    this.communityName = basics["name"];
    this.registrationPath = basics["registrationURL"];
    this.facebookPath = basics["facebook"];
    if (this.facebookPath === "") {
      this.facebookPath = "https://facebook.com";
    }
    this.twitterPath = basics["twitter"];
    if (this.twitterPath === "") {
      this.twitterPath = "https://twitter.com";
    }
    this.instagramPath = basics["instagram"];
    if (this.instagramPath === "") {
      this.instagramPath = "https://instagram.com";
    }
  }

  initSpeakers(): void {
    this.speakersList = session.filter(item => item.feature).map(({
      sessionName,
      sessionStartTime,
      sessionEndTime,
      sessionColor,
      speakerName,
      speakerRole,
      speakerImage
    }) => ({
      sessionName,
      sessionStartTime,
      sessionEndTime,
      sessionColor,
      speakerName,
      speakerRole,
      speakerImage
    }));
  }

  initPartners(): void {
    var parent = this;
    partners.forEach(function (object) {
      parent.partnersList.push({ 'name': object["name"], 'logoPath': object["logo"] });
    });
  }

  initSponsors(): void {
    var parent = this;
    sponsors.forEach(function (object) {
      parent.sponsorsList.push({ 'name': object["name"], 'logoPath': object["logo"], 'level': object["level"], 'link': object["link"] });
    });
  }

  initCollaborators(): void {
    var parent = this;
    collaborators.forEach(function (object) {
      parent.collaboratorsList.push({ 'name': object["name"], 'logoPath': object["logo"], 'level': object["level"], 'link': object["link"] });
    });
  }

}
