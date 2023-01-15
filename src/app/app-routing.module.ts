import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";
import { PageTitleResolver } from "./services/page-title/page-title.resolver";

export interface PageData {
  title: string;
}

function buildPageData(title: string): PageData {
  return {
    title,
  };
}

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "users",
        data: buildPageData("Users"),
        resolve: [PageTitleResolver],
        loadChildren: () =>
          import("./users/users.module").then(m => m.UsersModule),
      },
      {
        path: "browser",
        loadChildren: () =>
          import("./browser/browser.module").then(m => m.BrowserModule),
      },
      {
        path: "**",
        redirectTo: "users",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatSidenavModule, MatToolbarModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
