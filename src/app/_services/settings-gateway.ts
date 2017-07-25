import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class SettingsServiceGateway{
  public colorChanged: EventEmitter<string> = new EventEmitter<string>();

}
