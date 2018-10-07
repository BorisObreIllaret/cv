import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import Hobby from './hobby.model';
import { ResumeActions, ResumeActionsTypes } from './resume.actions';

export interface HobbyState extends EntityState<Hobby> { }

const adapter: EntityAdapter<Hobby> = createEntityAdapter<Hobby>();

const initialState = adapter.getInitialState();

export function hobbyReducer(state: HobbyState = initialState, action: ResumeActions): HobbyState
{
    switch (action.type)
    {
        case ResumeActionsTypes.HobbiesCleared:
            return adapter.removeAll(state);

        case ResumeActionsTypes.HobbiesSet:
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