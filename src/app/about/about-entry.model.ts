/**
 * About entry.
 */
export class AboutEntry implements AboutEntry.AboutEntryModel
{
    /**
     * Identifier of about entry.
     */
    id: string;

    /**
     * Title of about entry.
     */
    title: string;

    /**
     * Image source for about entry.
     */
    imgSrc?: string;

    /**
     * Alternate text for about entry image.
     */
    imgAlt?: string;

    /**
     * Description of about entry.
     */
    description?: string;

    /**
     * Material icon for about entry.
     */
    icon?: string;

    /**
     * SVG icon for about entry.
     */
    svgIcon?: string;

    /**
     * Number allowing to sort the about entry.
     */
    order: number;

    /**
     * @constructor
     * 
     * @param {AboutEntry.AboutEntryModel} obj
     * JSON object used to build a new instance of {@link AboutEntry}.
     */
    constructor(obj: AboutEntry.AboutEntryModel = {})
    {
        for (let prop in obj) this[prop] = obj[prop];
    }
}

namespace AboutEntry
{
    /**
     * Model of about entry.
     */
    export interface AboutEntryModel
    {
        /**
         * Identifier of about entry.
         */
        id?: string;

        /**
         * Title of about entry.
         */
        title?: string;

        /**
         * Image source for about entry.
         */
        imgSrc?: string;

        /**
         * Alternate text for about entry image.
         */
        imgAlt?: string;

        /**
         * Description of about entry.
         */
        description?: string;

        /**
         * Material icon for about entry.
         */
        icon?: string;

        /**
         * SVG icon for about entry.
         */
        svgIcon?: string;

        /**
         * Number allowing to sort the about entry.
         */
        order?: number;
    }
}

export default AboutEntry;
