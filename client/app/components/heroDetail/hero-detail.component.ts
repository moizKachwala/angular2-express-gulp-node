/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, Input} from '@angular/core';
import {Hero} from "../../models/hero";
import { ActivatedRoute, Params } from '@angular/router';
import {HeroService} from "../../services/hero.service";

@Component({
    selector: 'my-hero-detail',
    templateUrl: './app/components/heroDetail/hero-detail.component.html',
    styleUrls: ['./app/components/heroDetail/hero-detail.component.css']
})

export class HeroDetailComponent {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
                console.log('dsdfsdfsdf ' + id);
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack() {
        window.history.back();
    }
}