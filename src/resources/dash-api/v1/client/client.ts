// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import { Subscriptions } from './subscriptions';

export class Client extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Client.Subscriptions = Subscriptions;

export declare namespace Client {
  export { Subscriptions as Subscriptions };
}
