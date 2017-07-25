import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'details.component.html'
})
export class DetailsComponent implements OnInit{
    ngOnInit() {

    }

    model: any = {};
    loading = false;
    private userId: number;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        private alertService: AlertService
    ) {
      this.userId = +activatedRoute.params.subscribe(params => {
        let id = +params.id;
        this.userService.getById(id).subscribe(user => this.model = user);
      })
    }


    update() {
      console.log('saved2')
      this.loading = true;
        this.userService.update(this.model)
            .subscribe(
                data => {
                  console.log('saved')
                    this.alertService.success('Update successful', true);
                    this.router.navigate(['']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
