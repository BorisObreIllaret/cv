import { Action } from '@ngrx/store';
import { Skill } from './skill.model';

/**
 * Enumeration of all actions available for skill.
 */
export enum SkillActionsTypes
{
    SetSkills = '[Skill] Set Skills',
}

/**
 * Class for 'SetSkills' action.
 */
export class SetSkills implements Action
{
    readonly type = SkillActionsTypes.SetSkills;

    /**
     * @constructor
     * 
     * @param {Skill[]} payload 
     * Array of skills.
     */
    constructor(public payload: Skill[]) { }
}

/**
 * Type of all available skill actions.
 */
export type SkillActions = SetSkills;