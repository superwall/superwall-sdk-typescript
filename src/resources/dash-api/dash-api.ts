// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V2API from './v2/v2';
import { V2, V2RetrieveGrantsParams, V2RetrieveGrantsResponse } from './v2/v2';

export class DashAPI extends APIResource {
  v2: V2API.V2 = new V2API.V2(this._client);
}

DashAPI.V2 = V2;

export declare namespace DashAPI {
  export {
    V2 as V2,
    type V2RetrieveGrantsResponse as V2RetrieveGrantsResponse,
    type V2RetrieveGrantsParams as V2RetrieveGrantsParams,
  };
}
