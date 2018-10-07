import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import Assignment from './assignment.model';
import { ResumeActions, ResumeActionsTypes } from './resume.actions';

export interface AssignmentState extends EntityState<Assignment> { }

const adapter: EntityAdapter<Assignment> = createEntityAdapter<Assignment>();

const initialState = adapter.getInitialState();

export function assignmentReducer(state: AssignmentState = initialState, action: ResumeActions): AssignmentState
{
    switch (action.type)
    {
        case ResumeActionsTypes.JobAssignmentsRequested:
            return state;
        
        case ResumeActionsTypes.JobAssignmentsSet:
            return adapter.upsertMany(action.payload.entries, state);

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