// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WebhooksAPI from './webhooks/webhooks';
import { Webhooks } from './webhooks/webhooks';

export class Projects extends APIResource {
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

Projects.Webhooks = Webhooks;

export declare namespace Projects {
  export { Webhooks as Webhooks };
}
