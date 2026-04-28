// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource grants', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.grants.list({ project_id: 'project_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.grants.list({
      project_id: 'project_id',
      device_id: 'device_id',
      ending_before: 'ending_before',
      include_expired: 'true',
      include_revoked: 'true',
      limit: 'limit',
      starting_after: 'starting_after',
      user_id: 'user_id',
    });
  });
});
