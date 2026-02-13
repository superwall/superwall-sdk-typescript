// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LegacyAPI from './legacy';
import { Legacy } from './legacy';
import * as CampaignsAPI from './campaigns/campaigns';
import { Campaigns } from './campaigns/campaigns';

export class Applications extends APIResource {
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
  legacy: LegacyAPI.Legacy = new LegacyAPI.Legacy(this._client);
}

/**
 * a string to be decoded into a boolean
 */
export type BooleanFromString = 'true' | 'false';

Applications.Campaigns = Campaigns;
Applications.Legacy = Legacy;

export declare namespace Applications {
  export { type BooleanFromString as BooleanFromString };

  export { Campaigns as Campaigns };

  export { Legacy as Legacy };
}
