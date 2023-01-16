import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { User } from "../../services/user/user.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-user-listing",
  templateUrl: "./user-listing.component.html",
  styleUrls: ["./user-listing.component.scss"],
})
export class UserListingComponent implements AfterViewInit, OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);

  @Input()
  users: User[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: Array<keyof User> = [
    "id",
    "firstName",
    "lastName",
    "jobTitle",
    "email",
    "username",
  ];

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<User>(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
