import { Component } from "@angular/core";
import { combineLatest, filter, map, merge, Observable, of, tap } from "rxjs";
import { PageTitleService } from "../services/page-title/page-title.service";
import {
  NavigationEnd,
  Router,
  Event,
  RouterEvent,
  ActivatedRoute,
} from "@angular/router";

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  title$: Observable<string | null> = this.pageTitleService.title$;

  currentUrl$: Observable<string> = merge(
    of(this.router.url),
    this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent),
      map(event => event.url)
    )
  );

  title = "Inventory Tracker";
  navLinks: NavLink[] = [
    {
      path: "/browser",
      label: "Browser",
    },
    {
      path: "/users",
      label: "Users",
    },
  ];

  constructor(
    private pageTitleService: PageTitleService,
    private router: Router
  ) {}

  isNavLinkActivated(currentUrl: string | null, navLink: NavLink) {
    if (currentUrl) {
      return currentUrl.startsWith(navLink.path);
    } else {
      return false;
    }
  }
}
