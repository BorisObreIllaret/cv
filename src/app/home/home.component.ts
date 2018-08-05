import { Subscription, Observable } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Skill } from './skill.model';

import { HtmlHeaderService } from '../core/html-header.service';
import { SkillService } from './skill.service';
import { UIService } from '../shared/ui.service';

@Component({
    selector: 'cv-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy
{
    private readonly COMPONENT_TITLE = `Boris Obre-Illaret : Accueil`;
    private readonly COMPONENT_DESCRIPTION = `Bienvenu sur le site de Boris Obre-Illaret. Vous y trouverez une présentation, mon CV, le code source et comment me contacter.`;
    private readonly COMPONENT_KEYWORDS = `accueil, home, boris, obre-illaret, .net, projet, sap, angular`;
    
    yearsOld: string = '';

    isLoading$: Observable<boolean>;
    skills$: Observable<Skill[]>;

    private fragmentSubscription: Subscription;

    constructor(private htmlHeader: HtmlHeaderService,
                private route: ActivatedRoute,
                private skillsService: SkillService,
                private uiService: UIService) { }

    ngOnInit(): void
    {
        this.htmlHeader.setHeaderTags(this.COMPONENT_TITLE, this.COMPONENT_DESCRIPTION, this.COMPONENT_KEYWORDS);
        
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
