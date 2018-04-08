import { Action } from '@ngrx/store';
import { SourceCodeEntry } from './source-code-entry.model';

/**
 * Enumeration of all actions available for source code.
 */
export enum SourceCodeActionsTypes
{
    SetSourceCodeEntries = '[SourceCode] Set Source Code Entries',
}

/**
 * Class for 'SetSourceCodeEntries' action.
 */
export class SetSourceCodeEntries implements Action
{
    readonly type = SourceCodeActionsTypes.SetSourceCodeEntries;

    /**
     * @constructor
     * 
     * @param {SourceCodeEntry[]} payload 
     * Array of source code entries.
     */
    constructor(public payload: SourceCodeEntry[]) { }
}

/**
 * Type of all available source code actions.
 */
export type SourceCodeActions = SetSourceCodeEntries;