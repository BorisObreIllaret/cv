import { Action } from '@ngrx/store';

import Assignment from './assignment.model';
import Degree from './degree.model';
import Hobby from './hobby.model';
import Job from './job.model';

/**
 * Enumeration of all actions available for resume.
 */
export enum ResumeActionsTypes
{
    DegreesCleared = '[Resume Effect] Degrees cleared',
    DegreesSet = '[Resume Effect] Degrees set',
    HobbiesCleared = '[Resume Effect] Hobbies cleared',
    HobbiesSet = '[Resume Effect] Hobbies set',
    JobsCleared = '[Resume Effect] Jobs cleared',
    JobsSet = '[Resume Effect] Jobs set',
    JobAssignmentsRequested = '[Resume Job Component] Job assignments requested',
    JobAssignmentsSet = '[Resume Effect] Job assignments set',
}

export class DegreesCleared implements Action
{
    readonly type = ResumeActionsTypes.DegreesCleared;
}

export class DegreesSet implements Action
{
    readonly type = ResumeActionsTypes.DegreesSet;

    constructor(public payload: {entries: Degree[]}) {}
}

export class HobbiesCleared implements Action
{
    readonly type = ResumeActionsTypes.HobbiesCleared;
}

export class HobbiesSet implements Action
{
    readonly type = ResumeActionsTypes.HobbiesSet;
    
    constructor(public payload: {entries: Hobby[]}) {}
}

export class JobsCleared implements Action
{
    readonly type = ResumeActionsTypes.JobsCleared;
}

export class JobsSet implements Action
{
    readonly type = ResumeActionsTypes.JobsSet;
    
    constructor(public payload: {entries: Job[]}) {}
}

export class JobAssignmentsRequested implements Action
{
    readonly type = ResumeActionsTypes.JobAssignmentsRequested;

    constructor(public payload: {id: string}) {}
}

export class JobAssignmentsSet implements Action
{
    readonly type = ResumeActionsTypes.JobAssignmentsSet;

    constructor(public payload: {entries: Assignment[]}) {}
}

/**
 * Type of all available resume actions.
 */
export type ResumeActions =
DegreesCleared
| DegreesSet
| HobbiesCleared
| HobbiesSet
| JobsCleared
| JobsSet
| JobAssignmentsRequested
| JobAssignmentsSet;