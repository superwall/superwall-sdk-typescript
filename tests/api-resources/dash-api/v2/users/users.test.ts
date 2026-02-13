// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Prism tests are disabled
  test.skip('query: only required params', async () => {
    const responsePromise = client.dashAPI.v2.users.query({ application_id: 'application_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('query: required and optional params', async () => {
    const response = await client.dashAPI.v2.users.query({
      application_id: 'application_id',
      filters: [
        {
          id: 'id',
          field_id: 'field_id',
          values: [{}],
          operator: 'operator',
        },
      ],
      is_download: true,
      match_mode: 'all',
      search_term: 'search_term',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveActiveEntitlements: only required params', async () => {
    const responsePromise = client.dashAPI.v2.users.retrieveActiveEntitlements('app_user_id', {
      application_id: 'application_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveActiveEntitlements: required and optional params', async () => {
    const response = await client.dashAPI.v2.users.retrieveActiveEntitlements('app_user_id', {
      application_id: 'application_id',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveAttributes: only required params', async () => {
    const responsePromise = client.dashAPI.v2.users.retrieveAttributes('app_user_id', {
      application_id: 'application_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAttributes: required and optional params', async () => {
    const response = await client.dashAPI.v2.users.retrieveAttributes('app_user_id', {
      application_id: 'application_id',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveDeviceAttributes: only required params', async () => {
    const responsePromise = client.dashAPI.v2.users.retrieveDeviceAttributes('app_user_id', {
      application_id: 'application_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveDeviceAttributes: required and optional params', async () => {
    const response = await client.dashAPI.v2.users.retrieveDeviceAttributes('app_user_id', {
      application_id: 'application_id',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveEventNames: only required params', async () => {
    const responsePromise = client.dashAPI.v2.users.retrieveEventNames({ application_id: 'application_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveEventNames: required and optional params', async () => {
    const response = await client.dashAPI.v2.users.retrieveEventNames({
      application_id: 'application_id',
      include_all: 'true',
      is_web: 'true',
      limit: 'limit',
      offset: 'offset',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveFilterProperties: only required params', async () => {
    const responsePromise = client.dashAPI.v2.users.retrieveFilterProperties({
      application_id: 'application_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveFilterProperties: required and optional params', async () => {
    const response = await client.dashAPI.v2.users.retrieveFilterProperties({
      application_id: 'application_id',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveResolve: only required params', async () => {
    const responsePromise = client.dashAPI.v2.users.retrieveResolve({
      app_user_id: 'app_user_id',
      application_id: 'application_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveResolve: required and optional params', async () => {
    const response = await client.dashAPI.v2.users.retrieveResolve({
      app_user_id: 'app_user_id',
      application_id: 'application_id',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveSubscriptionSummary: only required params', async () => {
    const responsePromise = client.dashAPI.v2.users.retrieveSubscriptionSummary('app_user_id', {
      application_id: 'application_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSubscriptionSummary: required and optional params', async () => {
    const response = await client.dashAPI.v2.users.retrieveSubscriptionSummary('app_user_id', {
      application_id: 'application_id',
    });
  });
});
