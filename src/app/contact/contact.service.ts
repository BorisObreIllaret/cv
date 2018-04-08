import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecaptchaApiResponse } from './recaptcha.model';

@Injectable()
export class ContactService
{
    constructor(private http: HttpClient) { }

    validaterecaptcha(token: string): Observable<RecaptchaApiResponse>
    {
        return this.http.get<RecaptchaApiResponse>(`https://us-central1-ng-cv-tinath.cloudfunctions.net/api/validaterecaptcha?token=${token}`);
    }
}