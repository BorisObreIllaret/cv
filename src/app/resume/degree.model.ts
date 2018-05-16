import { Timestamp } from "@firebase/firestore-types";

/**
 * Degree.
 */
class Degree
{
    /**
     * Degree identifier.
     */
    id: string;

    /**
     * Degree level.
     */
    level?: string;

    /**
     * Grade name.
     */
    grade: string;

    /**
     * University name.
     */
    university: string;

    /**
     * University location.
     */
    location: string;

    /**
     * Degree subject.
     */
    subject?: string;

    /**
     * Degree start date.
     */
    startDate: Timestamp;

    /**
     * Degree end date.
     */
    endDate: Timestamp;

    /**
     * Number allowing to sort the degree.
     */
    order: number;

    /**
     * @constructor
     * 
     * @param {Degree.DegreeModel} obj
     * JSON object used to build a new instance of {@link Degree}.
     */
    constructor(obj: Degree.DegreeModel = {})
    {
        for (let prop in obj) this[prop] = obj[prop];
    }
}

namespace Degree
{
    /**
     * Model of degree.
     */
    export interface DegreeModel
    {
        /**
         * Degree identifier.
         */
        id?: string;

        /**
         * Degree level.
         */
        level?: string;

        /**
         * Grade name.
         */
        grade?: string;

        /**
         * University name.
         */
        university?: string;

        /**
         * University location.
         */
        location?: string;

        /**
         * Degree subject.
         */
        subject?: string;

        /**
         * Degree start date.
         */
        startDate?: Timestamp;

        /**
         * Degree end date.
         */
        endDate?: Timestamp;

        /**
         * Number allowing to sort the degree.
         */
        order?: number;
    }
}

export default Degree;