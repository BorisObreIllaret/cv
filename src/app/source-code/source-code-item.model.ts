/**
 * Source code item.
 */
class SourceCodeItem implements SourceCodeItem.SourceCodeItemModel
{
    /**
     * Name of source code item.
     */
    name: string;

    /**
     * Title of source code item.
     */
    title: string;

    /**
     * Url for source code item.
     */
    url: string;

    /**
     * @constructor
     * 
     * @param {SourceCodeItem.SourceCodeItemModel} obj
     * JSON object used to build a new instance of {@link SourceCodeItem}.
     */
    constructor(obj: SourceCodeItem.SourceCodeItemModel = {})
    {
        for (let prop in obj) this[prop] = obj[prop];
    }
}

namespace SourceCodeItem
{
    /**
     * Model of source code item.
     */
    export interface SourceCodeItemModel
    {
        /**
         * Name of source code item.
         */
        name?: string;

        /**
         * Title of source code item.
         */
        title?: string;

        /**
         * Url for source code item.
         */
        url?: string;
    }
}

export default SourceCodeItem;