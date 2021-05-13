import { action } from 'typesafe-actions';
import {
  CandidateJobsActionTypes,
  ICandidateJobsSetDialogs,
  ICandidateJobsSetLoadings,
} from './types';

export const onSetCandidateJobDialog = (
  field: ICandidateJobsSetDialogs['field'],
  value: ICandidateJobsSetDialogs['value']
) => action(CandidateJobsActionTypes.HANDLE_SET_DIALOG, { field, value });

export const onSetCandidateJobLoading = (
  field: ICandidateJobsSetLoadings['field'],
  value: ICandidateJobsSetLoadings['value']
) => action(CandidateJobsActionTypes.HANDLE_SET_LOADING, { field, value });

export const handleLoadJobs = () => action(CandidateJobsActionTypes.ON_LOAD_JOBS);
