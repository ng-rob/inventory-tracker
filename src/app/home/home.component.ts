import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { PageTitleService } from "../services/page-title/page-title.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  title$: Observable<string | null> = this.pageTitleService.title$;

  title = "Inventory Tracker";

  constructor(private pageTitleService: PageTitleService) {}
}
