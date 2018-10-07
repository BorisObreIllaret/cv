import { Action } from '@ngrx/store';
import { AboutEntry } from './about-entry.model';

/**
 * Enumeration of all actions available for about.
 */
export enum AboutActionsTypes
{
    AboutEntriesCleared = '[About Effect] About entries cleared',
    AboutEntriesSet = '[About Effect] About entries set',
    AboutEntryAdded = '[About Effect] About entry added',
    AboutEntryModified = '[About Effect] About entry modified',
    AboutEntryRemoved = '[About Effect] About entry removed',
}

export class AboutEntriesCleared implements Action
{
    readonly type = AboutActionsTypes.AboutEntriesCleared;
}

export class AboutEntriesSet implements Action
{
    readonly type = AboutActionsTypes.AboutEntriesSet;
    constructor(public payload: {entries: AboutEntry[]}) { }
}

export class AboutEntryAdded implements Action
{
    readonly type = AboutActionsTypes.AboutEntryAdded;
    constructor(public payload: {entry: AboutEntry}) { }
}

export class AboutEntryModified implements Action
{
    readonly type = AboutActionsTypes.AboutEntryModified;
    constructor(public payload: {id: string, entry: AboutEntry}) { }
}

export class AboutEntryRemoved implements Action
{
    readonly type = AboutActionsTypes.AboutEntryRemoved;
    constructor(public payload: {id: string}) { }
}

/**
 * Type of all available actions.
 */
export type AboutActions =
AboutEntriesCleared
| AboutEntriesSet
| AboutEntryAdded
| AboutEntryModified
| AboutEntryRemoved;