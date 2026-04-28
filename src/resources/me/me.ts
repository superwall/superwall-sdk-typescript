// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationsAPI from './organizations';
import {
  OrganizationCreateParams,
  OrganizationCreateResponse,
  OrganizationListResponse,
  Organizations,
} from './organizations';

export class Me extends APIResource {
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
}

Me.Organizations = Organizations;

export declare namespace Me {
  export {
    Organizations as Organizations,
    type OrganizationCreateResponse as OrganizationCreateResponse,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
  };
}
