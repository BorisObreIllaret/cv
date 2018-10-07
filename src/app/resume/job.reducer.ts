import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import Job from './job.model';
import { ResumeActions, ResumeActionsTypes } from './resume.actions';

export interface JobState extends EntityState<Job> { }

const adapter: EntityAdapter<Job> = createEntityAdapter<Job>();

const initialState = adapter.getInitialState();

export function jobReducer(state: JobState = initialState, action: ResumeActions): JobState
{
    switch (action.type)
    {
        case ResumeActionsTypes.JobsCleared:
            return adapter.removeAll(state);

        case ResumeActionsTypes.JobsSet:
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