// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SuperwallAPI } from '../client';

export abstract class APIResource {
  protected _client: SuperwallAPI;

  constructor(client: SuperwallAPI) {
    this._client = client;
  }
}
