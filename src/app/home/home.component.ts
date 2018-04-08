import { Subscription, Observable } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Skill } from './skill.model';

import { SkillService } from './skill.service';
import { UIService } from '../shared/ui.service';

@Component({
    selector: 'cv-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy
{
    yearsOld: string = '';

    isLoading$: Observable<boolean>;
    skills$: Observable<Skill[]>;

    private fragment: string;
    private fragmentSubscription: Subscription;

    constructor(private route: ActivatedRoute,
                private skillsService: SkillService,
                private uiService: UIService) { }

    ngOnInit(): void
    {
        this.fragmentSubscription = this.route.fragment.subscribe(
            (hash) => {
                const target = document.getElementById(hash);

                if (target) {
                    target.scrollIntoView();
                }

                else {
                    window.scrollTo(0, 0);
                }
            }
        )

        this.isLoading$ = this.uiService.storeSelectIsLoading();

        this.skills$ = this.skillsService.storeSelectSkills();
        this.skillsService.getSkillsFromDb();
    }

    ngOnDestroy(): void
    {
        this.fragmentSubscription.unsubscribe();
    }

    goToFragment(fragment: string): void
    {
        const target = document.getElementById(fragment);

        if (target) {
            target.scrollIntoView();
        }
    }
}
