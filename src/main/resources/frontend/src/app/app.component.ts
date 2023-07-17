import {Component} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private oauthService: OAuthService) {
    console.log('App component constructor');
  }

  configure = (): void => {
    // this.oauthService.configure(authConfig);
    // this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login = (): void => this.oauthService.initCodeFlow();
  logout = (): void => this.oauthService.logOut();
  isConnected = (): boolean => this.oauthService.hasValidAccessToken();
}
