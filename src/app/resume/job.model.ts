import Assignment from './assignment.model';
import { Timestamp } from '@firebase/firestore-types';

/**
 * Job.
 */
class Job implements Job.JobModel
{
    /**
     * Job identifier.
     */
    id: string;

    /**
     * Job name.
     */
    name: string;

    /**
     * Job description.
     */
    description: string;

    /**
     * Job start date.
     */
    startDate: Timestamp;

    /**
     * Job end date.
     */
    endDate?: Timestamp;

    /**
     * Job company.
     */
    company: string;

    /**
     * Company location.
     */
    companyLocation: string;

    /**
     * Company description.
     */
    companyDescription: string;

    /**
     * Achievments performed for this job.
     */
    achievements: string[];

    /**
     * Number allowing to sort the job.
     */
    order: number;

    /**
     * @constructor
     * 
     * @param {Job.JobModel} obj
     * JSON object used to build a new instance of {@link Job}.
     */
    constructor(obj: Job.JobModel = {})
    {
        for (let prop in obj) this[prop] = obj[prop];
    }
}

namespace Job
{
    /**
     * Model of job.
     */
    export interface JobModel
    {
        /**
         * Job identifier.
         */
        id?: string;

        /**
         * Job name.
         */
        name?: string;

        /**
         * Job description.
         */
        description?: string;

        /**
         * Job start date.
         */
        startDate?: Timestamp;

        /**
         * Job end date.
         */
        endDate?: Timestamp;

        /**
         * Job company.
         */
        company?: string;

        /**
         * Company location.
         */
        companyLocation?: string;

        /**
         * Company description.
         */
        companyDescription?: string;

        /**
         * Achievments performed for this job.
         */
        achievements?: string[];

        /**
         * Number allowing to sort the job.
         */
        order?: number;
    }
}

export default Job;