/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteAttachmentCommandResult } from '../../models/delete-attachment-command-result';

export interface DeleteFilePost$Params {
      body?: {
'Url'?: string;
}
}

export function deleteFilePost(http: HttpClient, rootUrl: string, params?: DeleteFilePost$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteAttachmentCommandResult>> {
  const rb = new RequestBuilder(rootUrl, deleteFilePost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeleteAttachmentCommandResult>;
    })
  );
}

deleteFilePost.PATH = '/DeleteFile';
