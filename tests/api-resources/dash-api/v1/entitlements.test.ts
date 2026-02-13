// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entitlements', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.dashAPI.v1.entitlements.list({ projectId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.dashAPI.v1.entitlements.list({
      projectId: 0,
      appUserId: 'x',
      deviceId: 'deviceId',
      includeExpired: true,
      includeRevoked: true,
    });
  });

  // Prism tests are disabled
  test.skip('grant: only required params', async () => {
    const responsePromise = client.dashAPI.v1.entitlements.grant({
      deviceId: 'deviceId',
      entitlementId: 'entitlementId',
      projectId: 0,
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
  test.skip('grant: required and optional params', async () => {
    const response = await client.dashAPI.v1.entitlements.grant({
      deviceId: 'deviceId',
      entitlementId: 'entitlementId',
      projectId: 0,
      appUserId: 'x',
      expiresAt: 0,
      reason: 'reason',
    });
  });

  // Prism tests are disabled
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.dashAPI.v1.entitlements.revoke({ grantId: 0, projectId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('revoke: required and optional params', async () => {
    const response = await client.dashAPI.v1.entitlements.revoke({ grantId: 0, projectId: 0 });
  });
});
