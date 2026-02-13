// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ErrorAPI from './error';
import { Error } from './error';

export class Ops extends APIResource {
  error: ErrorAPI.Error = new ErrorAPI.Error(this._client);
}

Ops.Error = Error;

export declare namespace Ops {
  export { Error as Error };
}
