import { Action } from '@ngrx/store';
import { AboutEntry } from './about-entry.model';

/**
 * Enumeration of all actions available for about.
 */
export enum AboutActionsTypes
{
    SetAboutEntries = '[About] Set About Entries',
}

/**
 * Class for 'SetAboutEntries' action.
 */
export class SetAboutEntries implements Action
{
    readonly type = AboutActionsTypes.SetAboutEntries;

        /**
     * @constructor
     * 
     * @param {AboutEntry[]} payload 
     * Array of about entries.
     */
    constructor(public payload: AboutEntry[]) { }
}

/**
 * Type of all available about actions.
 */
export type AboutActions = SetAboutEntries;