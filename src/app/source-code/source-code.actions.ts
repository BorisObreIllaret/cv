import { Action } from '@ngrx/store';
import { SourceCodeEntry } from './source-code-entry.model';

/**
 * Enumeration of all actions available for source code.
 */
export enum SourceCodeActionsTypes
{
    SourceCodeEntriesCleared = '[SourceCode Effect] Source code entries cleared',
    SourceCodeEntriesSet = '[SourceCode Effect] Source code entries set',
}

export class SourceCodeEntriesCleared implements Action
{
    readonly type = SourceCodeActionsTypes.SourceCodeEntriesCleared;
}

export class SourceCodeEntriesSet implements Action
{
    readonly type = SourceCodeActionsTypes.SourceCodeEntriesSet;

    constructor(public payload: {entries: SourceCodeEntry[]}) { }
}

/**
 * Type of all available actions.
 */
export type SourceCodeActions = 
SourceCodeEntriesCleared
| SourceCodeEntriesSet;