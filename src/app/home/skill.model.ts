/**
 * Skill.
 */
export class Skill implements Skill.SkillModel
{
    /**
     * Identifier.
     */
    id: string;
    
    /**
     * Name of the competence.
     */
    competence?: string;

    /**
     * Experience on this competence.
     */
    experience?: string;

    /**
     * Chips associated to the competence.
     */
    chips?: string[];

    /**
     * Skills associated to the competence.
     */
    skills?: string[];

    /**
     * Hobbies associated to the competence.
     */
    hobbies?: string[];

    /**
     * Number allowing to sort the competence.
     */
    order: number;

    /**
     * @constructor
     * 
     * @param obj
     * JSON object used to build a new instance of {@link Skill}.
     */
    constructor (obj: Skill.SkillModel = {})
    {
        for (let prop in obj) this[prop] = obj[prop];
    }
}

namespace Skill
{
    /**
     * Model of skill.
     */
    export interface SkillModel
    {
        /**
         * Identifier of competence.
         */
        id?: string;
        
        /**
         * Name of the competence.
         */
        competence?: string;

        /**
         * Experience on this competence.
         */
        experience?: string;

        /**
         * Chips associated to the competence.
         */
        chips?: string[];

        /**
         * Skills associated to the competence.
         */
        skills?: string[];

        /**
         * Hobbies associated to the competence.
         */
        hobbies?: string[];

        /**
         * Number allowing to sort the competence.
         */
        order?: number;
    }
}

export default Skill;