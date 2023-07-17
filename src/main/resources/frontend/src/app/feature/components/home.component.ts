import {Component, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = '';
  userProfile: any;

  constructor(private oauthService: OAuthService,
              private appService: AppService) {
    // this.configure();
  }

  ngOnInit(): void {
    this.appService.hello().subscribe(response => this.title = response);
  }

  loadUserProfile = () => this.oauthService.loadUserProfile().then((userProfile: any) =>this.userProfile = userProfile.info);

}
