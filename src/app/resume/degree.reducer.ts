import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import Degree from './degree.model';
import { ResumeActions, ResumeActionsTypes } from './resume.actions';

export interface DegreeState extends EntityState<Degree> { }

const adapter: EntityAdapter<Degree> = createEntityAdapter<Degree>();

const initialState = adapter.getInitialState();

export function degreeReducer(state: DegreeState = initialState, action: ResumeActions): DegreeState
{
    switch (action.type)
    {
        case ResumeActionsTypes.DegreesCleared:
            return adapter.removeAll(state);

        case ResumeActionsTypes.DegreesSet:
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