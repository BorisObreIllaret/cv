import { Directive, Input, OnInit, ElementRef, NgZone, Injector, AfterViewInit, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NgControl, FormControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Recaptcha } from './recaptcha.model';
import { RecaptchaAsyncValidator } from './recaptcha.validator';

declare const grecaptcha : any;

declare global
{
    interface Window
    {
        grecaptcha : any;
        recaptchaLoad : () => void;
    }
}

/**
 * reCAPTCHA directive
 * https://netbasal.com/how-to-integrate-recaptcha-in-your-angular-forms-400c43344d5c
 */
@Directive({
    selector: '[cvRecaptcha]',
    exportAs: 'cvRecaptcha',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RecaptchaDirective),
            multi: true,
        },
        RecaptchaAsyncValidator,
    ]
})
export class RecaptchaDirective implements OnInit, AfterViewInit, ControlValueAccessor
{
    @Input() config: Recaptcha = {};
    @Input() key: string;
    @Input() lang: string = 'fr';

    @Output() recaptchaResponse = new EventEmitter<string>();
    @Output() recaptchaExpired = new EventEmitter();

    private onChange: (value: string) => void;
    private onTouched: (value: string) => void;

    private control: FormControl;
    private widgetId: number;

    constructor(private element: ElementRef,
                private ngZone: NgZone,
                private injector : Injector,
                private recaptchaAsyncValidator: RecaptchaAsyncValidator) { }

    /* ---- OnInit implementation ---- */

    /**
     * Lifecycle hook that is called after data-bound properties of a directive are initialized.
     */
    ngOnInit(): void
    {
        this.registerRecaptchaCallback();
        this.addScript();
    }

    /**
     * Registers the onload callback function 'recaptchaLoad'.
     * https://developers.google.com/recaptcha/docs/display
     */
    private registerRecaptchaCallback(): void
    {
        window.recaptchaLoad = () =>
        {
            const config =
            {
                ...this.config,                
                'sitekey': this.key,
                'callback': this.onSuccess.bind(this),
                'expired-callback': this.onExpired.bind(this),
            };

            this.widgetId = this.render(this.element.nativeElement, config);
        }
    }

    /**
     * Inserts the Javascript resource, setting the onload parameter to the name of the onload callback function 'recaptchaLoad'.
     * https://developers.google.com/recaptcha/docs/display
     */
    private addScript(): void
    {
        let script = document.createElement('script');
        const lang = this.lang ? '&hl=' + this.lang : '';
        script.src = `https://www.google.com/recaptcha/api.js?onload=recaptchaLoad&render=explicit${lang}`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    /* ---- AfterViewInit implementation ---- */

    /**
     * Lifecycle hook that is called after a component's view has been fully initialized.
     */
    ngAfterViewInit(): void
    {
        this.control = this.injector.get(NgControl).control;
        this.setValidator();
    }

    /**
     * Enables the 'required' validator.
     */
    private setValidator(): void
    {
        this.control.setValidators(Validators.required);
        this.control.updateValueAndValidity();
    }

    /* ---- ControlValueAccessor implementation ---- */

    /**
     * Writes a new value to the element.
     * 
     * @param obj 
     */
    writeValue(obj: any): void { }

    /**
     * Registers a callback function that should be called when the control's value changes in the UI.
     * 
     * @param fn
     * Callback function to register.
     */
    registerOnChange(fn: any): void
    {
        this.onChange = fn;
    }

    /**
     * Registers a callback function that should be called when the control receives a blur event.
     * 
     * @param fn
     * Callback function to register.
     */
    registerOnTouched(fn: any): void
    {
        this.onTouched = fn;
    }

    /**
     * This function is called by the forms API when the control status changes to or from "DISABLED".
     * 
     * @param isDisabled 
     * Is true when the control has to be disabled.
     */
    setDisabledState?(isDisabled: boolean): void { }

    /* ---- Events ---- */

    /**
     * Callback function executed when the reCAPTCHA response expires and the user needs to solve a new reCAPTCHA.
     */
    onExpired(): void
    {
        this.ngZone.run(() =>
        {
            this.recaptchaExpired.emit();
            this.onChange(null);
            this.onTouched(null);
        });
    }

    /**
     * Callback function executed when the users submits a successful reCAPTCHA response.
     * 
     * @param token
     * reCAPTCHA token.
     */
    onSuccess(token: string): void
    {
        this.ngZone.run(() =>
        {
            this.verifyToken(token);
            this.recaptchaResponse.next(token);
            this.onChange(token);
            this.onTouched(token);
        });
    }

    /**
     * Sets reCAPTCHA validator to this control.
     * 
     * @param token
     * Token to validate.
     */
    verifyToken(token: string): void
    {
        this.control.setAsyncValidators(this.recaptchaAsyncValidator.validateToken(token));
        this.control.updateValueAndValidity();
    }

    /**
     * Renders the reCAPTCHA according to given HTML element and reCAPTCHA config.
     * 
     * @param {HTMLElement} element
     * HTML element where reCAPTCHA is displayed.
     * 
     * @param config 
     * reCAPTCHA configuration values.
     */
    private render(element: HTMLElement, config): number
    {
        return grecaptcha.render(element, config);
    }
}
