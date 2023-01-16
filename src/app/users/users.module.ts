import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UserListingComponent } from "./user-listing/user-listing.component";
import { UsersComponent } from "./users.component";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [UserListingComponent, UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class UsersModule {}
