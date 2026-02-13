// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WebhooksAPI from './webhooks/webhooks';
import {
  WebhookCreateParams,
  WebhookCreateResponse,
  WebhookDeleteParams,
  WebhookDeleteResponse,
  WebhookListParams,
  WebhookListResponse,
  WebhookManageResponse,
  WebhookRetrieveAttemptsParams,
  WebhookRetrieveAttemptsResponse,
  WebhookRetrieveParams,
  WebhookRetrieveResponse,
  WebhookRetrieveStatsParams,
  WebhookRetrieveStatsResponse,
  WebhookUpdateHeadersParams,
  WebhookUpdateHeadersResponse,
  WebhookUpdateParams,
  WebhookUpdateResponse,
  Webhooks,
} from './webhooks/webhooks';

export class Projects extends APIResource {
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

Projects.Webhooks = Webhooks;

export declare namespace Projects {
  export {
    Webhooks as Webhooks,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookManageResponse as WebhookManageResponse,
    type WebhookRetrieveAttemptsResponse as WebhookRetrieveAttemptsResponse,
    type WebhookRetrieveStatsResponse as WebhookRetrieveStatsResponse,
    type WebhookUpdateHeadersResponse as WebhookUpdateHeadersResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookRetrieveAttemptsParams as WebhookRetrieveAttemptsParams,
    type WebhookRetrieveStatsParams as WebhookRetrieveStatsParams,
    type WebhookUpdateHeadersParams as WebhookUpdateHeadersParams,
  };
}
