/**
 * reCAPTCHA model.
 * https://developers.google.com/recaptcha/intro
 */
export interface Recaptcha
{
    /**
     * reCAPTCHA size.
     */
    size?: 'compact' | 'normal';

    /**
     * reCAPTCHA theme.
     */
    theme?: 'dark' | 'light';

    /**
     * reCAPTCHA type.
     */
    type?: 'audio' | 'image';
}