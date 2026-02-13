// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource applications', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.dashAPI.v2.projects.applications.create('id', {
      name: 'x',
      platform: 'ios',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.dashAPI.v2.projects.applications.create('id', {
      name: 'x',
      platform: 'ios',
      app_id: 'app_id',
      bundle_id: 'bundle_id',
      domain: 'domain',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.dashAPI.v2.projects.applications.update('application_id', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.dashAPI.v2.projects.applications.update('application_id', {
      id: 'id',
      app_id: 'app_id',
      bundle_id: 'bundle_id',
      name: 'x',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveRecentTransactions: only required params', async () => {
    const responsePromise = client.dashAPI.v2.projects.applications.retrieveRecentTransactions(
      'application_id',
      {
        id: 'id',
        environment: 'PRODUCTION',
        from: 'from',
        to: 'to',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveRecentTransactions: required and optional params', async () => {
    const response = await client.dashAPI.v2.projects.applications.retrieveRecentTransactions(
      'application_id',
      {
        id: 'id',
        environment: 'PRODUCTION',
        from: 'from',
        to: 'to',
      },
    );
  });

  // Prism tests are disabled
  test.skip('retrieveStatistics: only required params', async () => {
    const responsePromise = client.dashAPI.v2.projects.applications.retrieveStatistics('application_id', {
      id: 'id',
      environment: 'PRODUCTION',
      from: 'from',
      to: 'to',
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
  test.skip('retrieveStatistics: required and optional params', async () => {
    const response = await client.dashAPI.v2.projects.applications.retrieveStatistics('application_id', {
      id: 'id',
      environment: 'PRODUCTION',
      from: 'from',
      to: 'to',
    });
  });

  // Prism tests are disabled
  test.skip('updateSettings: only required params', async () => {
    const responsePromise = client.dashAPI.v2.projects.applications.updateSettings('application_id', {
      id: 'id',
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
  test.skip('updateSettings: required and optional params', async () => {
    const response = await client.dashAPI.v2.projects.applications.updateSettings('application_id', {
      id: 'id',
      app_store_connect_shared_secret: 'app_store_connect_shared_secret',
      apple_small_business_end_date: 'apple_small_business_end_date',
      apple_small_business_start_date: 'apple_small_business_start_date',
      apple_url_scheme: 'apple_url_scheme',
      notification_redirect_url: 'notification_redirect_url',
      revenue_cat_public_api_key: 'revenue_cat_public_api_key',
      stripe_private_key: 'stripe_private_key',
    });
  });
});
