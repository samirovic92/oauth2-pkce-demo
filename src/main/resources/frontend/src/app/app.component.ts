import {Component, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '';

  constructor(private oauthService: OAuthService,
              private appService: AppService) {
    this.configure();
  }

  ngOnInit(): void {
    this.appService.hello().subscribe(response => this.title = response);
  }

  configure = (): void => {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login = (): void => this.oauthService.initCodeFlow();

  logout = (): void => this.oauthService.logOut();

  isConnected = (): boolean => this.oauthService.hasValidAccessToken()
}
