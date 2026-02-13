// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WebhooksAPI from './webhooks/webhooks';
import {
  WebhookCreateManagementPortalResponse,
  WebhookCreateParams,
  WebhookCreateResponse,
  WebhookDeleteParams,
  WebhookDeleteResponse,
  WebhookGetParams,
  WebhookGetResponse,
  WebhookGetStatsParams,
  WebhookGetStatsResponse,
  WebhookListAttemptsParams,
  WebhookListAttemptsResponse,
  WebhookListParams,
  WebhookListResponse,
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
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookCreateManagementPortalResponse as WebhookCreateManagementPortalResponse,
    type WebhookGetResponse as WebhookGetResponse,
    type WebhookGetStatsResponse as WebhookGetStatsResponse,
    type WebhookListAttemptsResponse as WebhookListAttemptsResponse,
    type WebhookUpdateHeadersResponse as WebhookUpdateHeadersResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookGetParams as WebhookGetParams,
    type WebhookGetStatsParams as WebhookGetStatsParams,
    type WebhookListAttemptsParams as WebhookListAttemptsParams,
    type WebhookUpdateHeadersParams as WebhookUpdateHeadersParams,
  };
}
