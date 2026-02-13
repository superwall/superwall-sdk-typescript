// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as IntegrationsAPI from './integrations';
import { Integrations } from './integrations';

export class Web2appintegrations extends APIResource {
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
}

Web2appintegrations.Integrations = Integrations;

export declare namespace Web2appintegrations {
  export { Integrations as Integrations };
}
