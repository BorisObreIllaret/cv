import { Component, Input } from '@angular/core';

import { Skill } from '../skill.model';

@Component({
    selector: 'cv-home-skill',
    templateUrl: './home-skill.component.html',
    styleUrls: ['./home-skill.component.scss']
})
export class HomeSkillComponent
{
    @Input() skill: Skill;

    goToFragment(fragment: string): void
    {
        const target = document.getElementById(fragment);

        if (target) {
            target.scrollIntoView();
        }
    }
}
