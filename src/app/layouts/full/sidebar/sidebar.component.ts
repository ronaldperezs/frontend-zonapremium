import { ChangeDetectorRef, Component, OnDestroy } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { Menu, MenuItems } from "../../../shared/menu-items/menu-items";
import { IAuthResponse } from "app/dtos/iAuthResponse";
import { AuthResponse } from "app/dtos/authResponse";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: [],
})
export class AppSidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  menu: Menu[];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia("(min-width: 768px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    let storageAuthResponse: string = localStorage.getItem("authResponse") ?? '';
    let authResponse: IAuthResponse = Object.setPrototypeOf(
      JSON.parse(storageAuthResponse),
      AuthResponse.prototype
    );
    if (authResponse.getScope() == "admin") {
      this.menu = menuItems.getMenuitem();
    } else {
      this.menu = menuItems.getMenuUser();
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
