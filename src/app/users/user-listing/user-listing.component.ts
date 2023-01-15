import { Component, Input } from "@angular/core";
import { User } from "../../services/user/user.service";

@Component({
  selector: "app-user-listing",
  templateUrl: "./user-listing.component.html",
  styleUrls: ["./user-listing.component.scss"],
})
export class UserListingComponent {
  @Input()
  users: User[] = [];
  displayedColumns: Array<keyof User> = [
    "id",
    "firstName",
    "lastName",
    "jobTitle",
    "email",
    "username",
  ];

  constructor() {}
}
