/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetStakeholderChildsQuery } from '../../models/get-stakeholder-childs-query';
import { GetStakeholderChildsQueryResult } from '../../models/get-stakeholder-childs-query-result';

export interface ApiCommonStackholdersGetStakeholderChildsPost$Plain$Params {
      body?: GetStakeholderChildsQuery
}

export function apiCommonStackholdersGetStakeholderChildsPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCommonStackholdersGetStakeholderChildsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetStakeholderChildsQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonStackholdersGetStakeholderChildsPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetStakeholderChildsQueryResult>;
    })
  );
}

apiCommonStackholdersGetStakeholderChildsPost$Plain.PATH = '/api/Common/Stackholders/GetStakeholderChilds';
