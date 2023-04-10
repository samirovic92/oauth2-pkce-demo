import {AuthConfig} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8180/realms/oauth2-demo-realm',
  redirectUri: window.location.origin,
  clientId: 'oauth2-demo-pcke-client',
  responseType: 'code',
  strictDiscoveryDocumentValidation: true,
  scope: 'openid profile email offline_access'
}
