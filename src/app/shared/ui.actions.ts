import { Action } from "@ngrx/store";

/**
 * Enumeration of all actions available for UI.
 */
export enum UIActionsTypes
{
    StartLoading = '[UI] Start Loading',
    StopLoading = '[UI] Stop Loading',
}

/**
 * Class for 'StartLoading' action.
 */
export class StartLoading implements Action
{
    readonly type = UIActionsTypes.StartLoading;
}

/**
 * Class for 'StopLoading' action.
 */
export class StopLoading implements Action
{
    readonly type = UIActionsTypes.StopLoading;
}

export type UIActions = StartLoading | StopLoading;