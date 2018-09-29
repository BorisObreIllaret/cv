import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

/**
 * A service that can be used to get and set elements of the header of the current HTML document.
 */
@Injectable({
    providedIn: 'root'
})
export class HtmlHeaderService
{
    constructor(private meta: Meta,
                private title: Title,
                @Inject(DOCUMENT) private doc) { }

    /**
     * Get the title of the current HTML document.
     * 
     * @return {string}
     * Title of the current HTML document.
     */
    getTitle = (): string => this.title.getTitle();

    /**
     * Set the title of the current HTML document.
     * 
     * @param newTitle
     * New title of the current HTML document.
     */
    setTitle = (newTitle: string): void => this.title.setTitle(newTitle);

    /**
     * Add a new meta tag to the header of the current HTML document.
     * 
     * @param newTag
     * New meta tag to add.
     */
    addMetaTag = (newTag: MetaDefinition): HTMLMetaElement | null => this.meta.addTag(newTag);

    /**
     * Add new meta tags to the header of the current HTML document.
     * 
     * @param newTag
     * New meta tags to add.
     */
    addMetaTags = (newTags: MetaDefinition[]): HTMLMetaElement[] => this.meta.addTags(newTags);

    /**
     * Get meta tag from the header of the current HTML document.
     * 
     * @param attrSelector 
     */
    getMetaTag = (attrSelector: string): HTMLMetaElement | null => this.meta.getTag(attrSelector);

    /**
     * Get meta tags from the header of the current HTML document.
     * 
     * @param attrSelector 
     */
    getMetaTags = (attrSelector: string): HTMLMetaElement[] => this.meta.getTags(attrSelector);

    /**
     * Update meta tag from the header of the current HTML document.
     */
    updateMetaTag = (tag: MetaDefinition, selector?: string): HTMLMetaElement | null => this.meta.updateTag(tag, selector);

    /**
     * Remove meta tag from the header of the current HTML document.
     */
    removeMetaTag = (attrSelector: string): void => this.meta.removeTag(attrSelector);

    /**
     * Remove meta tag from the header of the current HTML document.
     */
    removeMetaTagElement = (meta: HTMLMetaElement): void => this.meta.removeTagElement(meta);

    /**
     * Add a new link to the header of the current HTML document.
     */
    addLinkTag = (newLink: HTMLLinkElement): void => this.doc.head.appendChild(newLink);

    /**
     * Get all link tags from the header of the current HTML document.
     */
    getLinkTags = (): HTMLLinkElement[] => this.doc.head.getElementsByTagName('link');

    /**
     * Get all canonical link tags from the header of the current HTML document.
     */
    getCanonicalLinkTags = (): HTMLLinkElement[] => this.doc.head.querySelectorAll('link[rel=canonical]');

    /**
     * Remove the link tag from the header of the current HTML document.
     */
    removeLinkTag = (link: HTMLLinkElement): void => this.doc.head.removeChild(link);

    /**
     * Set the link for canonical url to the header of the current HTML document.
     * 
     * @param url
     * URL to be set to the `href` attribute.
     */
    setCanonicalLinkTag(url: string): void
    {
        const canonicalLinkTags = this.getCanonicalLinkTags();

        if (canonicalLinkTags && canonicalLinkTags.length > 0)
        {
            for (let i = 0; i < canonicalLinkTags.length; i++)
            {
                if (i === 0)
                {
                    canonicalLinkTags[i].href = url;
                }
                
                else
                {
                    this.removeLinkTag(canonicalLinkTags[i]);                        
                }
            }
        }

        else
        {
            let link: HTMLLinkElement = this.doc.createElement('link');
            link.rel = 'canonical';
            link.href = url;
            this.doc.head.appendChild(link);
        }
    }

    /**
     * Set all header tags required for the current page
     * 
     * @param title
     * Page title
     * 
     * @param description
     * Page description
     * 
     * @param keywords
     * Page keywords
     * 
     * @param url
     * Page canonical URL
     */
    setHeaderTags(title: string, description: string, keywords: string, url?: string): void
    {
        // Set title
        this.setTitle(title);
        this.updateMetaTag({property: 'og:title', content: title});

        // Set description
        this.updateMetaTag({ name: 'description', content: description });
        this.updateMetaTag({ property: 'og:description', content: description });

        // Set keywords
        this.updateMetaTag({ name: 'keywords', content: keywords});

        // Set canonical URL
        this.setCanonicalLinkTag(url || this.doc.URL);
        this.updateMetaTag({ property: 'og:url', content: url || this.doc.URL});
    }
}