import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  template: `
    <mat-toolbar fxLayoutGap="8px" color="primary">
      <button mat-icon-button><mat-icon>menu</mat-icon></button>
      <a mat-icon-button routerLink="/home">
        <mat-icon svgIcon="lemon"></mat-icon>&nbsp;&nbsp;
        <span class="mat-h2">Lemon Mart</span>
      </a>
      <span class="flex-spacer"></span>
      <button
        mat-mini-fab
        routerLink="/user/profile"
        matTooltip="Profile"
        aria-label="User Profile"
      >
        <mat-icon>account_circle</mat-icon>
      </button>
      <button
        mat-mini-fab
        routerLink="/user/logout"
        matTooltip="Logout"
        aria-label="Logout"
      ></button>
      <button mat-icon-button>
        <mat-icon>lock_open</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      "lemon",
      sanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/lemon.svg")
    );
  }

  title = "lemon-mart";
}
