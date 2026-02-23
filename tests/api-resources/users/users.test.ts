// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Mock server tests are disabled
  test.skip('listEventNames: only required params', async () => {
    const responsePromise = client.users.listEventNames({ application_id: 'application_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listEventNames: required and optional params', async () => {
    const response = await client.users.listEventNames({
      application_id: 'application_id',
      include_all: 'true',
      is_web: 'true',
      limit: 'limit',
      offset: 'offset',
    });
  });

  // Mock server tests are disabled
  test.skip('listFilterProperties: only required params', async () => {
    const responsePromise = client.users.listFilterProperties({ application_id: 'application_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listFilterProperties: required and optional params', async () => {
    const response = await client.users.listFilterProperties({ application_id: 'application_id' });
  });

  // Mock server tests are disabled
  test.skip('query: only required params', async () => {
    const responsePromise = client.users.query({ application_id: 'application_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('query: required and optional params', async () => {
    const response = await client.users.query({
      application_id: 'application_id',
      filters: [
        {
          id: 'id',
          field_id: 'field_id',
          values: ['string'],
          operator: 'operator',
        },
      ],
      is_download: true,
      match_mode: 'all',
      search_term: 'search_term',
    });
  });

  // Mock server tests are disabled
  test.skip('resolve: only required params', async () => {
    const responsePromise = client.users.resolve({
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

  // Mock server tests are disabled
  test.skip('resolve: required and optional params', async () => {
    const response = await client.users.resolve({
      app_user_id: 'app_user_id',
      application_id: 'application_id',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveActiveEntitlements: only required params', async () => {
    const responsePromise = client.users.retrieveActiveEntitlements('app_user_id', {
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

  // Mock server tests are disabled
  test.skip('retrieveActiveEntitlements: required and optional params', async () => {
    const response = await client.users.retrieveActiveEntitlements('app_user_id', {
      application_id: 'application_id',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveAttributes: only required params', async () => {
    const responsePromise = client.users.retrieveAttributes('app_user_id', {
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

  // Mock server tests are disabled
  test.skip('retrieveAttributes: required and optional params', async () => {
    const response = await client.users.retrieveAttributes('app_user_id', {
      application_id: 'application_id',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveDeviceAttributes: only required params', async () => {
    const responsePromise = client.users.retrieveDeviceAttributes('app_user_id', {
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

  // Mock server tests are disabled
  test.skip('retrieveDeviceAttributes: required and optional params', async () => {
    const response = await client.users.retrieveDeviceAttributes('app_user_id', {
      application_id: 'application_id',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveSubscriptionSummary: only required params', async () => {
    const responsePromise = client.users.retrieveSubscriptionSummary('app_user_id', {
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

  // Mock server tests are disabled
  test.skip('retrieveSubscriptionSummary: required and optional params', async () => {
    const response = await client.users.retrieveSubscriptionSummary('app_user_id', {
      application_id: 'application_id',
    });
  });
});
