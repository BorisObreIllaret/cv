import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAbout from '../about/about.reducer';
import * as fromNavigation from './navigation/navigation.reducer';
import * as fromResume from '../resume/resume.reducer';
import * as fromSkill from '../home/skill.reducer';
import * as fromSourceCode from '../source-code/source-code.reducer';
import * as fromUI from '../shared/ui.reducer';

/**
 * Interface for application state.
 */
export interface State
{
    about: fromAbout.State,
    navigation: fromNavigation.State,
    resume: fromResume.State,
    skill: fromSkill.State,
    sourceCode: fromSourceCode.State,
    ui: fromUI.State,
}

/**
 * Application reducers.
 */
export const reducers: ActionReducerMap<State> =
{
    about: fromAbout.aboutReducer,
    navigation: fromNavigation.navigationReducer,
    resume: fromResume.resumeReducer,
    skill: fromSkill.skillReducer,
    sourceCode: fromSourceCode.sourceCodeReducer,
    ui: fromUI.uiReducer,
}

export const getAboutState = createFeatureSelector<fromAbout.State>('about');
export const getAboutEntries = createSelector(getAboutState, fromAbout.getAboutEntries);

export const getNavigationState = createFeatureSelector<fromNavigation.State>('navigation');
export const getShowSideNav = createSelector(getNavigationState, fromNavigation.getShowSideNav);
export const getNavigationItems = createSelector(getNavigationState, fromNavigation.getNavigationItems);

export const getResumeState = createFeatureSelector<fromResume.State>('resume');
export const getAssignments = createSelector(getResumeState, fromResume.getAssignments);
export const getDegrees = createSelector(getResumeState, fromResume.getDegrees);
export const getHobbies = createSelector(getResumeState, fromResume.getHobbies);
export const getJobs = createSelector(getResumeState, fromResume.getJobs);

export const getSkillsState = createFeatureSelector<fromSkill.State>('skill');
export const getSkills = createSelector(getSkillsState, fromSkill.getSkills);

export const getSourceCodeState = createFeatureSelector<fromSourceCode.State>('sourceCode');
export const getSourceCodeEntries = createSelector(getSourceCodeState, fromSourceCode.getSourceCodeEntries);

export const getUIState = createFeatureSelector<fromUI.State>('ui');
export const getIsLoading = createSelector(getUIState, fromUI.getIsLoading);