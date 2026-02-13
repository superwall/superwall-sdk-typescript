// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource error', () => {
  // Prism tests are disabled
  test.skip('reportAuthenticated: only required params', async () => {
    const responsePromise = client.dashAPI.v1.ops.error.reportAuthenticated({
      message: 'message',
      name: 'name',
      pathname: 'pathname',
      timestamp: 'timestamp',
      url: 'url',
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
  test.skip('reportAuthenticated: required and optional params', async () => {
    const response = await client.dashAPI.v1.ops.error.reportAuthenticated({
      message: 'message',
      name: 'name',
      pathname: 'pathname',
      timestamp: 'timestamp',
      url: 'url',
      additionalContext: { foo: 'bar' },
      environment: 'environment',
      organizationId: 0,
      organizationName: 'organizationName',
      stack: 'stack',
      userAgent: 'userAgent',
      userEmail: 'userEmail',
      userId: 'userId',
    });
  });

  // Prism tests are disabled
  test.skip('reportUnauthenticated: only required params', async () => {
    const responsePromise = client.dashAPI.v1.ops.error.reportUnauthenticated({
      message: 'message',
      name: 'name',
      pathname: 'pathname',
      timestamp: 'timestamp',
      url: 'url',
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
  test.skip('reportUnauthenticated: required and optional params', async () => {
    const response = await client.dashAPI.v1.ops.error.reportUnauthenticated({
      message: 'message',
      name: 'name',
      pathname: 'pathname',
      timestamp: 'timestamp',
      url: 'url',
      additionalContext: { foo: 'bar' },
      environment: 'environment',
      organizationId: 0,
      organizationName: 'organizationName',
      stack: 'stack',
      userAgent: 'userAgent',
      userEmail: 'userEmail',
      userId: 'userId',
    });
  });
});
