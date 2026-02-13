// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Users extends APIResource {
  /**
   * Get Self
   */
  retrieveSelf(options?: RequestOptions): APIPromise<UserRetrieveSelfResponse> {
    return this._client.get('/dash-api/v1/users/self', { ...options, __security: { bearerAuth: true } });
  }
}

export interface UserRetrieveSelfResponse {
  id: number;

  /**
   * a string to be decoded into a Date
   */
  createdAt: string;

  email: string;

  isBotUser: boolean;

  name: string | null;

  object: 'user';

  role: string;
}

export declare namespace Users {
  export { type UserRetrieveSelfResponse as UserRetrieveSelfResponse };
}
