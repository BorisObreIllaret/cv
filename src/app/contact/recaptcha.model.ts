/**
 * reCAPTCHA API response model.
 */
export interface RecaptchaApiResponse
{
    /**
     * Is true if captcha has been validated.
     */
    success?: boolean,

    /**
     * Timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ).
     */
    challenge_ts?: string,

    /**
     * The hostname of the site where the reCAPTCHA was solved.
     */
    hostname?: string,

    /**
     * Prospective error code.
     */
    error_codes?: string,

    /**
     * reCAPTCHA protected data.
     */
    data?: any,
}