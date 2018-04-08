/**
 * Hobby
 */
class Hobby
{
    /**
     * Hobby identifier.
     */
    id: string;

    /**
     * Hobby name.
     */
    name: string;

    /**
     * Hobby description.
     */
    description: string;

    /**
     * Hobby material icon.
     */
    icon?: string;

    /**
     * Hobby SVG icon.
     */
    svgIcon?: string;

    /**
     * Number allowing to sort the hobby.
     */
    order: number;

    /**
     * @constructor
     * 
     * @param {Hobby.HobbyModel} obj
     * JSON object used to build a new instance of {@link Hobby}.
     */
    constructor(obj: Hobby.HobbyModel = {})
    {
        for (let prop in obj) this[prop] = obj[prop];
    }
}

namespace Hobby
{
    export interface HobbyModel
    {
        /**
         * Hobby identifier.
         */
        id?: string;

        /**
         * Hobby name.
         */
        name?: string;

        /**
         * Hobby description.
         */
        description?: string;

        /**
         * Hobby material icon.
         */
        icon?: string;

        /**
         * Hobby SVG icon.
         */
        svgIcon?: string;

        /**
         * Number allowing to sort the hobby.
         */
        order?: number;
    }
}

export default Hobby;