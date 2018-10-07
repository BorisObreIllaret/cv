import { Action } from '@ngrx/store';
import { Skill } from './skill.model';

/**
 * Enumeration of all actions available for skill.
 */
export enum SkillActionsTypes
{
    SkillsCleared = '[Skill Effect] Skills cleared',
    SkillsSet = '[Skill Effect] Skills set',
}

export class SkillsCleared implements Action
{
    readonly type = SkillActionsTypes.SkillsCleared;
}

export class SkillsSet implements Action
{
    readonly type = SkillActionsTypes.SkillsSet;

    constructor(public payload: {entries: Skill[]}) { }
}

/**
 * Type of all available actions.
 */
export type SkillActions = 
SkillsCleared
| SkillsSet;