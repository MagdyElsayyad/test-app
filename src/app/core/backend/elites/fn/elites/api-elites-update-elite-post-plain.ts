/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateEliteCommandResult } from '../../models/update-elite-command-result';

export interface ApiElitesUpdateElitePost$Plain$Params {
      body?: {
'Id': string;
'Name': string;
'Position'?: string;
'Workplace'?: string;
'BestAchievement'?: string;
'SocialUrl'?: string;
'PhoneNumber'?: string;
'Email'?: string;
'Notes'?: string;
'CityId'?: string;
'CategoryId'?: string;
'QualificationId'?: string;
'Attachments'?: Array<Blob>;
'ProfilePicture'?: Array<Blob>;
}
}

export function apiElitesUpdateElitePost$Plain(http: HttpClient, rootUrl: string, params?: ApiElitesUpdateElitePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateEliteCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiElitesUpdateElitePost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UpdateEliteCommandResult>;
    })
  );
}

apiElitesUpdateElitePost$Plain.PATH = '/api/Elites/UpdateElite';
