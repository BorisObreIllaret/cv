/**
 * Assignment.
 */
class Assignment implements Assignment.AssignmentModel
{
    /**
     * Assignment identifier.
     */
    id: string;

    /**
     * Identifier of parent job.
     */
    jobId: string;
    
    /**
     * Assignment name.
     */
    name: string;

    /**
     * Tasks performed for this assignment.
     */
    tasks: string[];

    /**
     * Number allowing to sort the assignment.
     */
    order: number;

    /**
     * @constructor
     * 
     * @param {Assignment.AssignmentModel} obj
     * JSON object used to build a new instance of {@link Assignment}.
     */
    constructor(obj: Assignment.AssignmentModel = {})
    {
        for (let prop in obj) this[prop] = obj[prop];
    }
}

namespace Assignment
{
    /**
     * Model of assignment.
     */
    export interface AssignmentModel
    {
        /**
         * Assignment identifier.
         */
        id?: string;

        /**
         * Identifier of parent job.
         */
        jobId?: string;
        
        /**
         * Assignment name.
         */
        name?: string;

        /**
         * Tasks performed for this assignment.
         */
        tasks?: string[];

        /**
         * Number allowing to sort the assignment.
         */
        order?: number;
    }
}

export default Assignment;