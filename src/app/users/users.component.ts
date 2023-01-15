import { Component } from "@angular/core";
import { UserService } from "../services/user/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent {
  users$ = this.userService.getUsers();

  constructor(private userService: UserService) {}
}
