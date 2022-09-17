import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { ManagerRoutingModule } from "./manager-routing.module";
import { ManagerHomeComponent } from "./manager-home/manager-home.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { ReceiptLookupComponent } from "./receipt-lookup/receipt-lookup.component";
import { ManagerComponent } from "./manager/manager.component";

@NgModule({
  declarations: [
    ManagerComponent,
    ManagerHomeComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
    ManagerComponent,
  ],
  imports: [CommonModule, ManagerRoutingModule, MaterialModule],
})
export class ManagerModule {}
