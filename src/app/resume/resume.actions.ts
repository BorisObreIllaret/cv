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
    SetAssignments = '[Resume] Set Assignments',
    SetDegrees = '[Resume] Set Degrees',
    SetHobbies = '[Resume] Set Hobbies',
    SetJobs = '[Resume] Set Jobs',
}

/**
 * Class for 'SetAssignments' action.
 */
export class SetAssignments implements Action
{
    readonly type = ResumeActionsTypes.SetAssignments;

    /**
     * 
     * @param {Assignment[]} payload
     * Array of assignments.
     */
    constructor(public payload: Assignment[]) {}

}

/**
 * Class for 'SetDegrees' action.
 */
export class SetDegrees implements Action
{
    readonly type = ResumeActionsTypes.SetDegrees;

    /**
     * 
     * @param {Degree[]} payload
     * Array of degrees.
     */
    constructor(public payload: Degree[]) {}
}

/**
 * Class for 'SetHobbies' action.
 */
export class SetHobbies implements Action
{
    readonly type = ResumeActionsTypes.SetHobbies;

    /**
     * 
     * @param {Hobby[]} payload
     * Array of hobbies.
     */
    constructor(public payload: Hobby[]) {}
}

/**
 * Class for 'SetJobs' action.
 */
export class SetJobs implements Action
{
    readonly type = ResumeActionsTypes.SetJobs;

    /**
     * 
     * @param {Jobs[]} payload
     * Array of jobs.
     */
    constructor(public payload: Job[]) {}
}

/**
 * Type of all available resume actions.
 */
export type ResumeActions = SetAssignments | SetDegrees | SetHobbies | SetJobs;