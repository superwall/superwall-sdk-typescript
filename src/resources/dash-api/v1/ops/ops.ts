// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ErrorAPI from './error';
import {
  Error,
  ErrorReportAuthenticatedParams,
  ErrorReportAuthenticatedResponse,
  ErrorReportUnauthenticatedParams,
  ErrorReportUnauthenticatedResponse,
} from './error';

export class Ops extends APIResource {
  error: ErrorAPI.Error = new ErrorAPI.Error(this._client);
}

Ops.Error = Error;

export declare namespace Ops {
  export {
    Error as Error,
    type ErrorReportAuthenticatedResponse as ErrorReportAuthenticatedResponse,
    type ErrorReportUnauthenticatedResponse as ErrorReportUnauthenticatedResponse,
    type ErrorReportAuthenticatedParams as ErrorReportAuthenticatedParams,
    type ErrorReportUnauthenticatedParams as ErrorReportUnauthenticatedParams,
  };
}
