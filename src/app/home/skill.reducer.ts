import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Skill } from './skill.model';
import { SkillActions, SkillActionsTypes } from './skill.actions';

/**
 * Inteface for skill state.
 */
export interface SkillState extends EntityState<Skill> { }

const adapter: EntityAdapter<Skill> = createEntityAdapter<Skill>();


/**
 * Default values for skill state.
 */
const initialState: SkillState = adapter.getInitialState();

/** 
 * Reducer for skill.
 * 
 * @param {SkillState} state
 * Current state.
 * 
 * @param {SkillActions} action
 * Action to apply.
 * 
 * @returns {SkillState}
 * New state according to action.
 */
// export const skillReducer: ActionReducer<State, SkillActions> = (state: State = initialState, action: SkillActions) =>
export function skillReducer(state: SkillState = initialState, action: SkillActions): SkillState
{
    switch (action.type)
    {
        case SkillActionsTypes.SkillsCleared:
            return adapter.removeAll(state);

        case SkillActionsTypes.SkillsSet:
            return adapter.addAll(action.payload.entries, state);

        default:
            return state;
    }
}

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = adapter.getSelectors();