import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { UserListingComponent } from "./user-listing/user-listing.component";
import { UsersComponent } from "./users.component";

@NgModule({
  declarations: [UserListingComponent, UsersComponent],
  imports: [CommonModule, UsersRoutingModule, MatCardModule, MatTableModule],
})
export class UsersModule {}
