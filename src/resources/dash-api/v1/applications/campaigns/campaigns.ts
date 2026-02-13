// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as LegacyAPI from './legacy';
import { Legacy } from './legacy';

export class Campaigns extends APIResource {
  legacy: LegacyAPI.Legacy = new LegacyAPI.Legacy(this._client);
}

Campaigns.Legacy = Legacy;

export declare namespace Campaigns {
  export { Legacy as Legacy };
}
