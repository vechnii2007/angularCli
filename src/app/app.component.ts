import { Component } from '@angular/core';
import {SettingsService} from "./_services/settings";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    providers: [SettingsService]
})

export class AppComponent {
  private settings: SettingsService;
  constructor(
     settings: SettingsService
  ){
    this.settings = settings;

  }

  get color(): string {
    return this.settings.colorHex;
  }

}
