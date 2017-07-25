import {EventEmitter, Injectable} from "@angular/core";
import {SettingsServiceGateway} from "./settings-gateway";

@Injectable()
export class SettingsService{

  constructor(private settingsServiceGateway: SettingsServiceGateway){
    settingsServiceGateway.colorChanged.subscribe((color: string) => this._colorHex = color)
  }

  get colorHex(): string {
    return this._colorHex;
  }

  set colorHex(value: string) {
    this._colorHex = value;
    this.settingsServiceGateway.colorChanged.emit(value)
  }

  private _colorHex: string = '#009900';
}
