// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Stripe extends APIResource {
  /**
   * Revalidate Stripe Keys
   */
  revalidateKeys(applicationID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/dash-api/v1/webpaywalls/${applicationID}/stripe/revalidate-keys`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: { bearerAuth: true },
    });
  }
}
