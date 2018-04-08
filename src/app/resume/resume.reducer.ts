import { ActionReducer } from '@ngrx/store';

import { ResumeActions, ResumeActionsTypes } from './resume.actions';

import Assignment from './assignment.model';
import Job from './job.model';
import Degree from './degree.model';
import Hobby from './hobby.model';

/**
 * Interface for resume state.
 */
export interface State
{
    assignments: Assignment[],
    degrees: Degree[],
    hobbies: Hobby[],
    jobs: Job[],
}

/**
 * Default values for resume state.
 */
const initialState: State =
{
    assignments: [],
    degrees: [],
    hobbies: [],
    jobs: [],
}

/**
 * Reducer for resume.
 * 
 * @param {State} state
 * Current resume state.
 * 
 * @param {ResumeActions} action 
 * Resume action.
 * 
 * @returns {State}
 * New resume state according to action.
 */
// export const resumeReducer: ActionReducer<State, ResumeActions> = (state: State = initialState, action: ResumeActions) =>
export function resumeReducer (state: State = initialState, action: ResumeActions)
{
    switch(action.type)
    {
        case ResumeActionsTypes.SetAssignments:
            return { ...state, assignments: action.payload };

        case ResumeActionsTypes.SetDegrees:
            return { ...state, degrees: action.payload };

        case ResumeActionsTypes.SetHobbies:
            return { ...state, hobbies: action.payload };
        
        case ResumeActionsTypes.SetJobs:
            return { ...state, jobs: action.payload };

        default:
            return { ...state };
    }
}

/**
 * Returns the value of 'assignments' from the given resume state.
 * 
 * @param {State} state
 * Resume state.
 */
export const getAssignments = (state: State) => state.assignments;

/**
 * Returns the value of 'degrees' from the given resume state.
 * 
 * @param {State} state
 * Resume state.
 */
export const getDegrees = (state: State) => state.degrees;

/**
 * Returns the value of 'hobbies' from the given resume state.
 * 
 * @param {State} state
 * Resume state.
 */
export const getHobbies = (state: State) => state.hobbies;

/**
 * Returns the value of 'jobs' from the given resume state.
 * 
 * @param {State} state
 * Resume state.
 */
export const getJobs = (state: State) => state.jobs;