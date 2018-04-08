import { ActionReducer } from '@ngrx/store';
import { Skill } from './skill.model';
import { SkillActions, SkillActionsTypes } from './skill.actions';

/**
 * Inteface for skill state.
 */
export interface State
{
    skills: Skill[],
}

/**
 * Default values for skill state.
 */
const initialState: State =
{
    skills: [],
}

/** 
 * Reducer for skill.
 * 
 * @param {State} state
 * Current skill state.
 * 
 * @param {SkillAction} action
 * Skill action.
 * 
 * @returns {State}
 * New skill state according to action.
 */
// export const skillReducer: ActionReducer<State, SkillActions> = (state: State = initialState, action: SkillActions) =>
export function skillReducer(state: State = initialState, action: SkillActions)
{
    switch (action.type)
    {
        case SkillActionsTypes.SetSkills:
            return { ...state, skills: action.payload };

        default:
            return { ...state };        
    }
}

/**
 * Returns the value of 'skills' from the given skill state.
 * 
 * @param {State} state 
 * Skill state.
 */
export const getSkills = (state: State) => state.skills;