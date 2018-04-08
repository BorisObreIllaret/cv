import SourceCodeItem from './source-code-item.model';

/**
 * Source code entry.
 */
export class SourceCodeEntry implements SourceCodeEntry.SourceCodeEntryModel
{
    /**
     * Identifier of source code entry.
     */
    id: string;

    /**
     * Name of source code entry.
     */
    name: string;

    /**
     * Description of source code entry.
     */
    description: string;

    /**
     * Material icon for source code entry.
     */
    icon?: string;

    /**
     * SVG icon for source code entry.
     */
    svgIcon?: string;

    /**
     * Number allowing to sort the source code entry.
     */
    order: number;

    /**
     * Items for source code entry.
     */
    items?: SourceCodeItem[];

    /**
     * @constructor
     * 
     * @param {SourceCodeEntry.SourceCodeEntryModel} obj
     * JSON object used to build a new instance of {@link SourceCodeEntry}.
     */
    constructor(obj: SourceCodeEntry.SourceCodeEntryModel = {})
    {
        for (let prop in obj) this[prop] = obj[prop];
    }
}

namespace SourceCodeEntry
{
    /**
     * Model of source code entry.
     */
    export interface SourceCodeEntryModel
    {
        /**
         * Identifier of source code entry.
         */
        id?: string;

        /**
         * Name of source code entry.
         */
        name?: string;

        /**
         * Description of source code entry.
         */
        description?: string;

        /**
         * Material icon for source code entry.
         */
        icon?: string;

        /**
         * SVG icon for source code entry.
         */
        svgIcon?: string;

        /**
         * Number allowing to sort the source code entry.
         */
        order?: number;

        /**
         * Items for source code entry.
         */
        items?: SourceCodeItem[];
    }
}

export default SourceCodeEntry;