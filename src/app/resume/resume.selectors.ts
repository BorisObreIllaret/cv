import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromAssignment from './assignment.reducer';
import { AssignmentState } from './assignment.reducer';

import * as fromDegree from './degree.reducer';
import { DegreeState } from './degree.reducer';

import * as fromHobby from './hobby.reducer';
import { HobbyState } from './hobby.reducer';

import * as fromJob from './job.reducer';
import { JobState } from './job.reducer';

export const selectAssignmentState = createFeatureSelector<AssignmentState>('assignment');
export const selectAllAssignments = createSelector(selectAssignmentState, fromAssignment.selectAll);
export const selectJobAssignments = (jobId: string) => createSelector(
    selectAllAssignments,
    allAssignments => allAssignments.filter(a => a.jobId === jobId)
);

export const selectDegreeState = createFeatureSelector<DegreeState>('degree');
export const selectAllDegrees = createSelector(selectDegreeState, fromDegree.selectAll);

export const selectHobbyState = createFeatureSelector<HobbyState>('hobby');
export const selectAllHobbies = createSelector(selectHobbyState, fromHobby.selectAll);

export const selectJobState = createFeatureSelector<JobState>('job');
export const selectAllJobs = createSelector(selectJobState, fromJob.selectAll);