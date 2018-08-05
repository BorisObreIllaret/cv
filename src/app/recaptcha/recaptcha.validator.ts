import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { InjectionToken, Injectable, Inject } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export const RECAPTCHA_URL = new InjectionToken('RECAPTCHA_URL');

export interface RecaptchaVerifyResponse
{
    success: boolean;
    challenge_ts: Date;
    hostname: string;
    error_codes?: any[];
    data?: any;
}

@Injectable({
    providedIn: 'root'
})
export class RecaptchaAsyncValidator
{
    constructor(private http: HttpClient,
                @Inject(RECAPTCHA_URL) private url) { }

    validateToken(token: string): (_: AbstractControl) => Observable<{ tokenInvalid: boolean } | null>
    {
        return (_: AbstractControl) =>
        {
            return this.http.get<RecaptchaVerifyResponse>(this.url, { params: { token } })
                            .pipe(map(result => {
                                if (!result.success) return { tokenInvalid: true };
                                else return null;
                            }));
        }
    }
}