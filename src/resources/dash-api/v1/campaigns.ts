// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Campaigns extends APIResource {
  triggers(
    experimentGroupID: string,
    body: CampaignTriggersParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(path`/dash-api/v1/campaigns/${experimentGroupID}/triggers`, {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export type CampaignTriggersResponse = unknown;

export interface CampaignTriggersParams {
  eventName: string;

  removeFromOtherGroups?: boolean;
}

export declare namespace Campaigns {
  export {
    type CampaignTriggersResponse as CampaignTriggersResponse,
    type CampaignTriggersParams as CampaignTriggersParams,
  };
}
