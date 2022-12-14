import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AuthService } from "./auth/auth.service";
import { InMemoryAuthService } from "./auth/auth.inmemory.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ManagerModule } from "./manager/manager.module";
import { InventoryModule } from "./inventory/inventory.module";
import { PosModule } from "./pos/pos.module";
import { UserModule } from "./user/user.module";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    ManagerModule,
    InventoryModule,
    PosModule,
    UserModule,
  ],
  providers: [
    {
      provide: AuthService,
      useClass: InMemoryAuthService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
