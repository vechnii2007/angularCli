import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {SettingsService} from "../_services/settings";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    providers: [SettingsService]
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(
      private userService: UserService,
      private settings: SettingsService
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    get color(): string {
      return this.settings.colorHex;
    }
    set color(value: string){
      this.settings.colorHex = value;
    }
}
