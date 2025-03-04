/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateQualificationCommand } from '../../models/create-qualification-command';
import { CreateQualificationCommandResult } from '../../models/create-qualification-command-result';

export interface ApiQualificationsCreateQualificationPost$Plain$Params {
      body?: CreateQualificationCommand
}

export function apiQualificationsCreateQualificationPost$Plain(http: HttpClient, rootUrl: string, params?: ApiQualificationsCreateQualificationPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateQualificationCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiQualificationsCreateQualificationPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateQualificationCommandResult>;
    })
  );
}

apiQualificationsCreateQualificationPost$Plain.PATH = '/api/Qualifications/CreateQualification';
