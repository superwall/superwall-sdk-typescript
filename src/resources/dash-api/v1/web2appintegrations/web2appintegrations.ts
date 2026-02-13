// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as IntegrationsAPI from './integrations';
import {
  IntegrationCreateParams,
  IntegrationDeleteParams,
  IntegrationGetParams,
  IntegrationListResponse,
  IntegrationUpdateParams,
  Integrations,
  Web2appIntegrationModel,
} from './integrations';

export class Web2appintegrations extends APIResource {
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
}

Web2appintegrations.Integrations = Integrations;

export declare namespace Web2appintegrations {
  export {
    Integrations as Integrations,
    type Web2appIntegrationModel as Web2appIntegrationModel,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
    type IntegrationGetParams as IntegrationGetParams,
  };
}
