# DashAPI

## V1

### Users

Types:

- <code><a href="./src/resources/dash-api/v1/users.ts">UserRetrieveSelfResponse</a></code>

Methods:

- <code title="get /dash-api/v1/users/self">client.dashAPI.v1.users.<a href="./src/resources/dash-api/v1/users.ts">retrieveSelf</a>() -> UserRetrieveSelfResponse</code>

### Applications

Types:

- <code><a href="./src/resources/dash-api/v1/applications/applications.ts">ApplicationModel</a></code>
- <code><a href="./src/resources/dash-api/v1/applications/applications.ts">BooleanFromString</a></code>
- <code><a href="./src/resources/dash-api/v1/applications/applications.ts">ApplicationListResponse</a></code>

Methods:

- <code title="post /dash-api/v1/applications">client.dashAPI.v1.applications.<a href="./src/resources/dash-api/v1/applications/applications.ts">create</a>({ ...params }) -> ApplicationModel</code>
- <code title="get /dash-api/v1/applications">client.dashAPI.v1.applications.<a href="./src/resources/dash-api/v1/applications/applications.ts">list</a>({ ...params }) -> ApplicationListResponse</code>

#### Campaigns

Types:

- <code><a href="./src/resources/dash-api/v1/applications/campaigns/campaigns.ts">CampaignListResponse</a></code>

Methods:

- <code title="get /dash-api/v1/applications/{applicationId}/campaigns">client.dashAPI.v1.applications.campaigns.<a href="./src/resources/dash-api/v1/applications/campaigns/campaigns.ts">list</a>(applicationID, { ...params }) -> CampaignListResponse</code>

##### Legacy

Types:

- <code><a href="./src/resources/dash-api/v1/applications/campaigns/legacy.ts">LegacyRetrieveStatisticsResponse</a></code>

Methods:

- <code title="get /dash-api/v1/applications/{applicationId}/campaigns/legacy/statistics">client.dashAPI.v1.applications.campaigns.legacy.<a href="./src/resources/dash-api/v1/applications/campaigns/legacy.ts">retrieveStatistics</a>(applicationID, { ...params }) -> LegacyRetrieveStatisticsResponse</code>

#### Legacy

Types:

- <code><a href="./src/resources/dash-api/v1/applications/legacy.ts">LegacyRetrieveStatisticsResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/applications/legacy.ts">LegacyRetrieveTransactionsResponse</a></code>

Methods:

- <code title="get /dash-api/v1/applications/{applicationId}/legacy/statistics">client.dashAPI.v1.applications.legacy.<a href="./src/resources/dash-api/v1/applications/legacy.ts">retrieveStatistics</a>(applicationID, { ...params }) -> LegacyRetrieveStatisticsResponse</code>
- <code title="get /dash-api/v1/applications/{applicationId}/legacy/transactions">client.dashAPI.v1.applications.legacy.<a href="./src/resources/dash-api/v1/applications/legacy.ts">retrieveTransactions</a>(applicationID, { ...params }) -> LegacyRetrieveTransactionsResponse</code>

### Client

Types:

- <code><a href="./src/resources/dash-api/v1/client/client.ts">ClientRetrieveMetaResponse</a></code>

Methods:

- <code title="get /dash-api/v1/client/meta">client.dashAPI.v1.client.<a href="./src/resources/dash-api/v1/client/client.ts">retrieveMeta</a>({ ...params }) -> ClientRetrieveMetaResponse</code>

#### Subscriptions

Types:

- <code><a href="./src/resources/dash-api/v1/client/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/client/subscriptions.ts">SubscriptionSubscribeResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/client/subscriptions.ts">SubscriptionUnsubscribeResponse</a></code>

Methods:

- <code title="get /dash-api/v1/client/{playerId}/subscriptions">client.dashAPI.v1.client.subscriptions.<a href="./src/resources/dash-api/v1/client/subscriptions.ts">list</a>(playerID) -> SubscriptionListResponse</code>
- <code title="post /dash-api/v1/client/{playerId}/subscriptions/subscribe">client.dashAPI.v1.client.subscriptions.<a href="./src/resources/dash-api/v1/client/subscriptions.ts">subscribe</a>(playerID, { ...params }) -> SubscriptionSubscribeResponse</code>
- <code title="post /dash-api/v1/client/{playerId}/subscriptions/unsubscribe">client.dashAPI.v1.client.subscriptions.<a href="./src/resources/dash-api/v1/client/subscriptions.ts">unsubscribe</a>(playerID, { ...params }) -> SubscriptionUnsubscribeResponse</code>

### Paywalls

Types:

- <code><a href="./src/resources/dash-api/v1/paywalls.ts">PaywallRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/paywalls.ts">PaywallPrepareSnapshotResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/paywalls.ts">PaywallPromoteFromSnapshotResponse</a></code>

Methods:

- <code title="get /dash-api/v1/paywalls/{applicationId}">client.dashAPI.v1.paywalls.<a href="./src/resources/dash-api/v1/paywalls.ts">retrieve</a>(applicationID, { ...params }) -> PaywallRetrieveResponse</code>
- <code title="post /dash-api/v1/paywalls/{id}/prepare-snapshot">client.dashAPI.v1.paywalls.<a href="./src/resources/dash-api/v1/paywalls.ts">prepareSnapshot</a>(id, { ...params }) -> PaywallPrepareSnapshotResponse</code>
- <code title="post /dash-api/v1/paywalls/{id}/promote-from-snapshot">client.dashAPI.v1.paywalls.<a href="./src/resources/dash-api/v1/paywalls.ts">promoteFromSnapshot</a>(id, { ...params }) -> PaywallPromoteFromSnapshotResponse</code>

### Webpaywalls

Types:

- <code><a href="./src/resources/dash-api/v1/webpaywalls/webpaywalls.ts">WebpaywallRetrieveConfigurationResponse</a></code>

Methods:

- <code title="get /dash-api/v1/webpaywalls/configuration">client.dashAPI.v1.webpaywalls.<a href="./src/resources/dash-api/v1/webpaywalls/webpaywalls.ts">retrieveConfiguration</a>() -> WebpaywallRetrieveConfigurationResponse</code>

#### Domains

Types:

- <code><a href="./src/resources/dash-api/v1/webpaywalls/domains.ts">WebPaywallDomainModel</a></code>
- <code><a href="./src/resources/dash-api/v1/webpaywalls/domains.ts">DomainRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/webpaywalls/domains.ts">DomainListResponse</a></code>

Methods:

- <code title="post /dash-api/v1/webpaywalls/{applicationId}/domains">client.dashAPI.v1.webpaywalls.domains.<a href="./src/resources/dash-api/v1/webpaywalls/domains.ts">create</a>(applicationID, { ...params }) -> WebPaywallDomainModel</code>
- <code title="get /dash-api/v1/webpaywalls/{applicationId}/domains/{domain}">client.dashAPI.v1.webpaywalls.domains.<a href="./src/resources/dash-api/v1/webpaywalls/domains.ts">retrieve</a>(domain, { ...params }) -> DomainRetrieveResponse</code>
- <code title="get /dash-api/v1/webpaywalls/{applicationId}/domains">client.dashAPI.v1.webpaywalls.domains.<a href="./src/resources/dash-api/v1/webpaywalls/domains.ts">list</a>(applicationID, { ...params }) -> DomainListResponse</code>

#### Stripe

Methods:

- <code title="post /dash-api/v1/webpaywalls/{applicationId}/stripe/revalidate-keys">client.dashAPI.v1.webpaywalls.stripe.<a href="./src/resources/dash-api/v1/webpaywalls/stripe.ts">revalidateKeys</a>(applicationID) -> void</code>

### Web2appintegrations

#### Integrations

Types:

- <code><a href="./src/resources/dash-api/v1/web2appintegrations/integrations.ts">Web2appIntegrationModel</a></code>
- <code><a href="./src/resources/dash-api/v1/web2appintegrations/integrations.ts">IntegrationListResponse</a></code>

Methods:

- <code title="post /dash-api/v1/web2appintegrations/{projectId}/integrations">client.dashAPI.v1.web2appintegrations.integrations.<a href="./src/resources/dash-api/v1/web2appintegrations/integrations.ts">create</a>(projectID, { ...params }) -> Web2appIntegrationModel</code>
- <code title="get /dash-api/v1/web2appintegrations/{projectId}/integrations/{integrationId}">client.dashAPI.v1.web2appintegrations.integrations.<a href="./src/resources/dash-api/v1/web2appintegrations/integrations.ts">retrieve</a>(integrationID, { ...params }) -> Web2appIntegrationModel</code>
- <code title="patch /dash-api/v1/web2appintegrations/{projectId}/integrations/{integrationId}">client.dashAPI.v1.web2appintegrations.integrations.<a href="./src/resources/dash-api/v1/web2appintegrations/integrations.ts">update</a>(integrationID, { ...params }) -> Web2appIntegrationModel</code>
- <code title="get /dash-api/v1/web2appintegrations/{projectId}/integrations">client.dashAPI.v1.web2appintegrations.integrations.<a href="./src/resources/dash-api/v1/web2appintegrations/integrations.ts">list</a>(projectID) -> IntegrationListResponse</code>
- <code title="delete /dash-api/v1/web2appintegrations/{projectId}/integrations/{integrationId}">client.dashAPI.v1.web2appintegrations.integrations.<a href="./src/resources/dash-api/v1/web2appintegrations/integrations.ts">delete</a>(integrationID, { ...params }) -> void</code>

### Blog

Types:

- <code><a href="./src/resources/dash-api/v1/blog.ts">BlogRetrieveResponse</a></code>

Methods:

- <code title="get /dash-api/v1/blog/posts/{postSlug}">client.dashAPI.v1.blog.<a href="./src/resources/dash-api/v1/blog.ts">retrieve</a>(postSlug) -> BlogRetrieveResponse</code>

### Charts

#### Statistics

Types:

- <code><a href="./src/resources/dash-api/v1/charts/statistics.ts">StatisticRetrieveConfigResponse</a></code>

Methods:

- <code title="get /dash-api/v1/charts/statistics/config">client.dashAPI.v1.charts.statistics.<a href="./src/resources/dash-api/v1/charts/statistics.ts">retrieveConfig</a>() -> StatisticRetrieveConfigResponse</code>

### Campaigns

Types:

- <code><a href="./src/resources/dash-api/v1/campaigns.ts">CampaignTriggersResponse</a></code>

Methods:

- <code title="post /dash-api/v1/campaigns/{experimentGroupId}/triggers">client.dashAPI.v1.campaigns.<a href="./src/resources/dash-api/v1/campaigns.ts">triggers</a>(experimentGroupID, { ...params }) -> unknown</code>

### Projects

#### Webhooks

Types:

- <code><a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">WebhookRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">WebhookManageResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">WebhookRetrieveAttemptsResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">WebhookRetrieveStatsResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">WebhookUpdateHeadersResponse</a></code>

Methods:

- <code title="post /dash-api/v1/projects/{projectId}/webhooks">client.dashAPI.v1.projects.webhooks.<a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">create</a>(projectID, { ...params }) -> WebhookCreateResponse</code>
- <code title="get /dash-api/v1/projects/{projectId}/webhooks/{endpointId}">client.dashAPI.v1.projects.webhooks.<a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">retrieve</a>(endpointID, { ...params }) -> WebhookRetrieveResponse</code>
- <code title="put /dash-api/v1/projects/{projectId}/webhooks/{endpointId}">client.dashAPI.v1.projects.webhooks.<a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">update</a>(endpointID, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /dash-api/v1/projects/{projectId}/webhooks">client.dashAPI.v1.projects.webhooks.<a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">list</a>(projectID, { ...params }) -> WebhookListResponse</code>
- <code title="delete /dash-api/v1/projects/{projectId}/webhooks/{endpointId}">client.dashAPI.v1.projects.webhooks.<a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">delete</a>(endpointID, { ...params }) -> WebhookDeleteResponse</code>
- <code title="post /dash-api/v1/projects/{projectId}/webhooks/manage">client.dashAPI.v1.projects.webhooks.<a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">manage</a>(projectID) -> WebhookManageResponse</code>
- <code title="get /dash-api/v1/projects/{projectId}/webhooks/{endpointId}/attempts">client.dashAPI.v1.projects.webhooks.<a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">retrieveAttempts</a>(endpointID, { ...params }) -> WebhookRetrieveAttemptsResponse</code>
- <code title="get /dash-api/v1/projects/{projectId}/webhooks/{endpointId}/stats">client.dashAPI.v1.projects.webhooks.<a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">retrieveStats</a>(endpointID, { ...params }) -> WebhookRetrieveStatsResponse</code>
- <code title="put /dash-api/v1/projects/{projectId}/webhooks/{endpointId}/headers">client.dashAPI.v1.projects.webhooks.<a href="./src/resources/dash-api/v1/projects/webhooks/webhooks.ts">updateHeaders</a>(endpointID, { ...params }) -> WebhookUpdateHeadersResponse</code>

##### Messages

Types:

- <code><a href="./src/resources/dash-api/v1/projects/webhooks/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/projects/webhooks/messages.ts">MessageRetrieveAttemptsResponse</a></code>

Methods:

- <code title="get /dash-api/v1/projects/{projectId}/webhooks/messages">client.dashAPI.v1.projects.webhooks.messages.<a href="./src/resources/dash-api/v1/projects/webhooks/messages.ts">list</a>(projectID, { ...params }) -> MessageListResponse</code>
- <code title="get /dash-api/v1/projects/{projectId}/webhooks/messages/{messageId}/attempts">client.dashAPI.v1.projects.webhooks.messages.<a href="./src/resources/dash-api/v1/projects/webhooks/messages.ts">retrieveAttempts</a>(messageID, { ...params }) -> MessageRetrieveAttemptsResponse</code>

### Ops

#### Error

Types:

- <code><a href="./src/resources/dash-api/v1/ops/error.ts">ErrorCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/ops/error.ts">ErrorUnauthenticatedResponse</a></code>

Methods:

- <code title="post /dash-api/v1/ops/error">client.dashAPI.v1.ops.error.<a href="./src/resources/dash-api/v1/ops/error.ts">create</a>({ ...params }) -> ErrorCreateResponse</code>
- <code title="post /dash-api/v1/ops/error/unauthenticated">client.dashAPI.v1.ops.error.<a href="./src/resources/dash-api/v1/ops/error.ts">unauthenticated</a>({ ...params }) -> ErrorUnauthenticatedResponse</code>

### Entitlements

Types:

- <code><a href="./src/resources/dash-api/v1/entitlements.ts">EntitlementListResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/entitlements.ts">EntitlementGrantResponse</a></code>
- <code><a href="./src/resources/dash-api/v1/entitlements.ts">EntitlementRevokeResponse</a></code>

Methods:

- <code title="post /dash-api/v1/entitlements/list">client.dashAPI.v1.entitlements.<a href="./src/resources/dash-api/v1/entitlements.ts">list</a>({ ...params }) -> EntitlementListResponse</code>
- <code title="post /dash-api/v1/entitlements/grant">client.dashAPI.v1.entitlements.<a href="./src/resources/dash-api/v1/entitlements.ts">grant</a>({ ...params }) -> EntitlementGrantResponse</code>
- <code title="post /dash-api/v1/entitlements/revoke">client.dashAPI.v1.entitlements.<a href="./src/resources/dash-api/v1/entitlements.ts">revoke</a>({ ...params }) -> EntitlementRevokeResponse</code>

## V2

Types:

- <code><a href="./src/resources/dash-api/v2/v2.ts">V2RetrieveGrantsResponse</a></code>

Methods:

- <code title="get /dash-api/v2/grants">client.dashAPI.v2.<a href="./src/resources/dash-api/v2/v2.ts">retrieveGrants</a>({ ...params }) -> V2RetrieveGrantsResponse</code>

### Projects

Types:

- <code><a href="./src/resources/dash-api/v2/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/projects.ts">ProjectUpdateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/projects.ts">ProjectArchiveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/projects.ts">ProjectUnarchiveResponse</a></code>

Methods:

- <code title="post /dash-api/v2/projects">client.dashAPI.v2.projects.<a href="./src/resources/dash-api/v2/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /dash-api/v2/projects/{id}">client.dashAPI.v2.projects.<a href="./src/resources/dash-api/v2/projects/projects.ts">retrieve</a>(id) -> ProjectRetrieveResponse</code>
- <code title="patch /dash-api/v2/projects/{id}">client.dashAPI.v2.projects.<a href="./src/resources/dash-api/v2/projects/projects.ts">update</a>(id, { ...params }) -> ProjectUpdateResponse</code>
- <code title="get /dash-api/v2/projects">client.dashAPI.v2.projects.<a href="./src/resources/dash-api/v2/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="post /dash-api/v2/projects/{id}/archive">client.dashAPI.v2.projects.<a href="./src/resources/dash-api/v2/projects/projects.ts">archive</a>(id) -> ProjectArchiveResponse</code>
- <code title="post /dash-api/v2/projects/{id}/unarchive">client.dashAPI.v2.projects.<a href="./src/resources/dash-api/v2/projects/projects.ts">unarchive</a>(id) -> ProjectUnarchiveResponse</code>

#### Applications

Types:

- <code><a href="./src/resources/dash-api/v2/projects/applications.ts">ApplicationCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/applications.ts">ApplicationUpdateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/applications.ts">ApplicationRetrieveRecentTransactionsResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/applications.ts">ApplicationRetrieveStatisticsResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/applications.ts">ApplicationUpdateSettingsResponse</a></code>

Methods:

- <code title="post /dash-api/v2/projects/{id}/applications">client.dashAPI.v2.projects.applications.<a href="./src/resources/dash-api/v2/projects/applications.ts">create</a>(id, { ...params }) -> ApplicationCreateResponse</code>
- <code title="patch /dash-api/v2/projects/{id}/applications/{application_id}">client.dashAPI.v2.projects.applications.<a href="./src/resources/dash-api/v2/projects/applications.ts">update</a>(applicationID, { ...params }) -> ApplicationUpdateResponse</code>
- <code title="get /dash-api/v2/projects/{id}/applications/{application_id}/recent-transactions">client.dashAPI.v2.projects.applications.<a href="./src/resources/dash-api/v2/projects/applications.ts">retrieveRecentTransactions</a>(applicationID, { ...params }) -> ApplicationRetrieveRecentTransactionsResponse</code>
- <code title="get /dash-api/v2/projects/{id}/applications/{application_id}/statistics">client.dashAPI.v2.projects.applications.<a href="./src/resources/dash-api/v2/projects/applications.ts">retrieveStatistics</a>(applicationID, { ...params }) -> ApplicationRetrieveStatisticsResponse</code>
- <code title="patch /dash-api/v2/projects/{id}/applications/{application_id}/settings">client.dashAPI.v2.projects.applications.<a href="./src/resources/dash-api/v2/projects/applications.ts">updateSettings</a>(applicationID, { ...params }) -> ApplicationUpdateSettingsResponse</code>

#### WebhookEndpoints

Types:

- <code><a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">WebhookEndpointCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">WebhookEndpointRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">WebhookEndpointUpdateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">WebhookEndpointListResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">WebhookEndpointDeleteResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">WebhookEndpointRotateSecretResponse</a></code>

Methods:

- <code title="post /dash-api/v2/projects/{project_id}/webhook_endpoints">client.dashAPI.v2.projects.webhookEndpoints.<a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">create</a>(projectID, { ...params }) -> WebhookEndpointCreateResponse</code>
- <code title="get /dash-api/v2/projects/{project_id}/webhook_endpoints/{endpoint_id}">client.dashAPI.v2.projects.webhookEndpoints.<a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">retrieve</a>(endpointID, { ...params }) -> WebhookEndpointRetrieveResponse</code>
- <code title="patch /dash-api/v2/projects/{project_id}/webhook_endpoints/{endpoint_id}">client.dashAPI.v2.projects.webhookEndpoints.<a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">update</a>(endpointID, { ...params }) -> WebhookEndpointUpdateResponse</code>
- <code title="get /dash-api/v2/projects/{project_id}/webhook_endpoints">client.dashAPI.v2.projects.webhookEndpoints.<a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">list</a>(projectID, { ...params }) -> WebhookEndpointListResponse</code>
- <code title="delete /dash-api/v2/projects/{project_id}/webhook_endpoints/{endpoint_id}">client.dashAPI.v2.projects.webhookEndpoints.<a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">delete</a>(endpointID, { ...params }) -> WebhookEndpointDeleteResponse</code>
- <code title="post /dash-api/v2/projects/{project_id}/webhook_endpoints/{endpoint_id}/rotate_secret">client.dashAPI.v2.projects.webhookEndpoints.<a href="./src/resources/dash-api/v2/projects/webhook-endpoints.ts">rotateSecret</a>(endpointID, { ...params }) -> WebhookEndpointRotateSecretResponse</code>

#### Events

Types:

- <code><a href="./src/resources/dash-api/v2/projects/events.ts">EventRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/events.ts">EventListResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/events.ts">EventRetrieveAttemptsResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/projects/events.ts">EventRetryResponse</a></code>

Methods:

- <code title="get /dash-api/v2/projects/{project_id}/events/{event_id}">client.dashAPI.v2.projects.events.<a href="./src/resources/dash-api/v2/projects/events.ts">retrieve</a>(eventID, { ...params }) -> EventRetrieveResponse</code>
- <code title="get /dash-api/v2/projects/{project_id}/events">client.dashAPI.v2.projects.events.<a href="./src/resources/dash-api/v2/projects/events.ts">list</a>(projectID, { ...params }) -> EventListResponse</code>
- <code title="get /dash-api/v2/projects/{project_id}/events/{event_id}/attempts">client.dashAPI.v2.projects.events.<a href="./src/resources/dash-api/v2/projects/events.ts">retrieveAttempts</a>(eventID, { ...params }) -> EventRetrieveAttemptsResponse</code>
- <code title="post /dash-api/v2/projects/{project_id}/events/{event_id}/retry">client.dashAPI.v2.projects.events.<a href="./src/resources/dash-api/v2/projects/events.ts">retry</a>(eventID, { ...params }) -> EventRetryResponse</code>

### Me

#### Organizations

Types:

- <code><a href="./src/resources/dash-api/v2/me/organizations.ts">OrganizationCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/me/organizations.ts">OrganizationListResponse</a></code>

Methods:

- <code title="post /dash-api/v2/me/organizations">client.dashAPI.v2.me.organizations.<a href="./src/resources/dash-api/v2/me/organizations.ts">create</a>({ ...params }) -> OrganizationCreateResponse</code>
- <code title="get /dash-api/v2/me/organizations">client.dashAPI.v2.me.organizations.<a href="./src/resources/dash-api/v2/me/organizations.ts">list</a>() -> OrganizationListResponse</code>

### Paywalls

Types:

- <code><a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">PaywallCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">PaywallRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">PaywallUpdateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">PaywallListResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">PaywallArchiveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">PaywallPublishResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">PaywallUnarchiveResponse</a></code>

Methods:

- <code title="post /dash-api/v2/paywalls">client.dashAPI.v2.paywalls.<a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">create</a>({ ...params }) -> PaywallCreateResponse</code>
- <code title="get /dash-api/v2/paywalls/{id}">client.dashAPI.v2.paywalls.<a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">retrieve</a>(id) -> PaywallRetrieveResponse</code>
- <code title="patch /dash-api/v2/paywalls/{id}">client.dashAPI.v2.paywalls.<a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">update</a>(id, { ...params }) -> PaywallUpdateResponse</code>
- <code title="get /dash-api/v2/paywalls">client.dashAPI.v2.paywalls.<a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">list</a>({ ...params }) -> PaywallListResponse</code>
- <code title="post /dash-api/v2/paywalls/{id}/archive">client.dashAPI.v2.paywalls.<a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">archive</a>(id) -> PaywallArchiveResponse</code>
- <code title="post /dash-api/v2/paywalls/{id}/publish">client.dashAPI.v2.paywalls.<a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">publish</a>(id) -> PaywallPublishResponse</code>
- <code title="post /dash-api/v2/paywalls/{id}/unarchive">client.dashAPI.v2.paywalls.<a href="./src/resources/dash-api/v2/paywalls/paywalls.ts">unarchive</a>(id) -> PaywallUnarchiveResponse</code>

#### Templates

Types:

- <code><a href="./src/resources/dash-api/v2/paywalls/templates.ts">TemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/paywalls/templates.ts">TemplateListResponse</a></code>

Methods:

- <code title="get /dash-api/v2/paywalls/templates/{id}">client.dashAPI.v2.paywalls.templates.<a href="./src/resources/dash-api/v2/paywalls/templates.ts">retrieve</a>(id) -> TemplateRetrieveResponse</code>
- <code title="get /dash-api/v2/paywalls/templates">client.dashAPI.v2.paywalls.templates.<a href="./src/resources/dash-api/v2/paywalls/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>

### Campaigns

Types:

- <code><a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">CampaignCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">CampaignRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">CampaignUpdateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">CampaignListResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">CampaignArchiveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">CampaignUnarchiveResponse</a></code>

Methods:

- <code title="post /dash-api/v2/campaigns">client.dashAPI.v2.campaigns.<a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">create</a>({ ...params }) -> CampaignCreateResponse</code>
- <code title="get /dash-api/v2/campaigns/{id}">client.dashAPI.v2.campaigns.<a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">retrieve</a>(id) -> CampaignRetrieveResponse</code>
- <code title="patch /dash-api/v2/campaigns/{id}/audiences/{audience_id}">client.dashAPI.v2.campaigns.<a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">update</a>(audienceID, { ...params }) -> CampaignUpdateResponse</code>
- <code title="get /dash-api/v2/campaigns">client.dashAPI.v2.campaigns.<a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">list</a>({ ...params }) -> CampaignListResponse</code>
- <code title="post /dash-api/v2/campaigns/{id}/archive">client.dashAPI.v2.campaigns.<a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">archive</a>(id) -> CampaignArchiveResponse</code>
- <code title="post /dash-api/v2/campaigns/{id}/unarchive">client.dashAPI.v2.campaigns.<a href="./src/resources/dash-api/v2/campaigns/campaigns.ts">unarchive</a>(id) -> CampaignUnarchiveResponse</code>

#### Placements

Types:

- <code><a href="./src/resources/dash-api/v2/campaigns/placements.ts">PlacementCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/campaigns/placements.ts">PlacementUpdateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/campaigns/placements.ts">PlacementDeleteResponse</a></code>

Methods:

- <code title="post /dash-api/v2/campaigns/{id}/placements">client.dashAPI.v2.campaigns.placements.<a href="./src/resources/dash-api/v2/campaigns/placements.ts">create</a>(id, { ...params }) -> PlacementCreateResponse</code>
- <code title="patch /dash-api/v2/campaigns/{id}/placements/{placement_id}">client.dashAPI.v2.campaigns.placements.<a href="./src/resources/dash-api/v2/campaigns/placements.ts">update</a>(placementID, { ...params }) -> PlacementUpdateResponse</code>
- <code title="delete /dash-api/v2/campaigns/{id}/placements/{placement_id}">client.dashAPI.v2.campaigns.placements.<a href="./src/resources/dash-api/v2/campaigns/placements.ts">delete</a>(placementID, { ...params }) -> PlacementDeleteResponse</code>

### Charts

Types:

- <code><a href="./src/resources/dash-api/v2/charts.ts">ChartDataResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/charts.ts">ChartRetrieveDefinitionsResponse</a></code>

Methods:

- <code title="post /dash-api/v2/charts/data">client.dashAPI.v2.charts.<a href="./src/resources/dash-api/v2/charts.ts">data</a>({ ...params }) -> ChartDataResponse</code>
- <code title="get /dash-api/v2/charts/definitions">client.dashAPI.v2.charts.<a href="./src/resources/dash-api/v2/charts.ts">retrieveDefinitions</a>({ ...params }) -> ChartRetrieveDefinitionsResponse</code>

### Entitlements

Types:

- <code><a href="./src/resources/dash-api/v2/entitlements/entitlements.ts">EntitlementCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/entitlements/entitlements.ts">EntitlementRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/entitlements/entitlements.ts">EntitlementUpdateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/entitlements/entitlements.ts">EntitlementListResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/entitlements/entitlements.ts">EntitlementDeleteResponse</a></code>

Methods:

- <code title="post /dash-api/v2/entitlements">client.dashAPI.v2.entitlements.<a href="./src/resources/dash-api/v2/entitlements/entitlements.ts">create</a>({ ...params }) -> EntitlementCreateResponse</code>
- <code title="get /dash-api/v2/entitlements/{id}">client.dashAPI.v2.entitlements.<a href="./src/resources/dash-api/v2/entitlements/entitlements.ts">retrieve</a>(id) -> EntitlementRetrieveResponse</code>
- <code title="patch /dash-api/v2/entitlements/{id}">client.dashAPI.v2.entitlements.<a href="./src/resources/dash-api/v2/entitlements/entitlements.ts">update</a>(id, { ...params }) -> EntitlementUpdateResponse</code>
- <code title="get /dash-api/v2/entitlements">client.dashAPI.v2.entitlements.<a href="./src/resources/dash-api/v2/entitlements/entitlements.ts">list</a>({ ...params }) -> EntitlementListResponse</code>
- <code title="delete /dash-api/v2/entitlements/{id}">client.dashAPI.v2.entitlements.<a href="./src/resources/dash-api/v2/entitlements/entitlements.ts">delete</a>(id) -> EntitlementDeleteResponse</code>

#### Grants

Types:

- <code><a href="./src/resources/dash-api/v2/entitlements/grants.ts">GrantCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/entitlements/grants.ts">GrantListResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/entitlements/grants.ts">GrantDeleteResponse</a></code>

Methods:

- <code title="post /dash-api/v2/entitlements/{id}/grants">client.dashAPI.v2.entitlements.grants.<a href="./src/resources/dash-api/v2/entitlements/grants.ts">create</a>(id, { ...params }) -> GrantCreateResponse</code>
- <code title="get /dash-api/v2/entitlements/{id}/grants">client.dashAPI.v2.entitlements.grants.<a href="./src/resources/dash-api/v2/entitlements/grants.ts">list</a>(id, { ...params }) -> GrantListResponse</code>
- <code title="delete /dash-api/v2/entitlements/{id}/grants/{grant_id}">client.dashAPI.v2.entitlements.grants.<a href="./src/resources/dash-api/v2/entitlements/grants.ts">delete</a>(grantID, { ...params }) -> GrantDeleteResponse</code>

### Products

Types:

- <code><a href="./src/resources/dash-api/v2/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/products.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/products.ts">ProductDeleteResponse</a></code>

Methods:

- <code title="post /dash-api/v2/products">client.dashAPI.v2.products.<a href="./src/resources/dash-api/v2/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="get /dash-api/v2/products/{id}">client.dashAPI.v2.products.<a href="./src/resources/dash-api/v2/products.ts">retrieve</a>(id) -> ProductRetrieveResponse</code>
- <code title="patch /dash-api/v2/products/{id}">client.dashAPI.v2.products.<a href="./src/resources/dash-api/v2/products.ts">update</a>(id, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /dash-api/v2/products">client.dashAPI.v2.products.<a href="./src/resources/dash-api/v2/products.ts">list</a>({ ...params }) -> ProductListResponse</code>
- <code title="delete /dash-api/v2/products/{id}">client.dashAPI.v2.products.<a href="./src/resources/dash-api/v2/products.ts">delete</a>(id) -> ProductDeleteResponse</code>

### Users

Types:

- <code><a href="./src/resources/dash-api/v2/users/users.ts">UserQueryResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/users/users.ts">UserRetrieveActiveEntitlementsResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/users/users.ts">UserRetrieveAttributesResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/users/users.ts">UserRetrieveDeviceAttributesResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/users/users.ts">UserRetrieveEventNamesResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/users/users.ts">UserRetrieveFilterPropertiesResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/users/users.ts">UserRetrieveResolveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/users/users.ts">UserRetrieveSubscriptionSummaryResponse</a></code>

Methods:

- <code title="post /dash-api/v2/users/query">client.dashAPI.v2.users.<a href="./src/resources/dash-api/v2/users/users.ts">query</a>({ ...params }) -> UserQueryResponse</code>
- <code title="get /dash-api/v2/users/{app_user_id}/active-entitlements">client.dashAPI.v2.users.<a href="./src/resources/dash-api/v2/users/users.ts">retrieveActiveEntitlements</a>(appUserID, { ...params }) -> UserRetrieveActiveEntitlementsResponse</code>
- <code title="get /dash-api/v2/users/{app_user_id}/attributes">client.dashAPI.v2.users.<a href="./src/resources/dash-api/v2/users/users.ts">retrieveAttributes</a>(appUserID, { ...params }) -> UserRetrieveAttributesResponse</code>
- <code title="get /dash-api/v2/users/{app_user_id}/device-attributes">client.dashAPI.v2.users.<a href="./src/resources/dash-api/v2/users/users.ts">retrieveDeviceAttributes</a>(appUserID, { ...params }) -> UserRetrieveDeviceAttributesResponse</code>
- <code title="get /dash-api/v2/users/event-names">client.dashAPI.v2.users.<a href="./src/resources/dash-api/v2/users/users.ts">retrieveEventNames</a>({ ...params }) -> UserRetrieveEventNamesResponse</code>
- <code title="get /dash-api/v2/users/filter-properties">client.dashAPI.v2.users.<a href="./src/resources/dash-api/v2/users/users.ts">retrieveFilterProperties</a>({ ...params }) -> UserRetrieveFilterPropertiesResponse</code>
- <code title="get /dash-api/v2/users/resolve">client.dashAPI.v2.users.<a href="./src/resources/dash-api/v2/users/users.ts">retrieveResolve</a>({ ...params }) -> UserRetrieveResolveResponse</code>
- <code title="get /dash-api/v2/users/{app_user_id}/subscription-summary">client.dashAPI.v2.users.<a href="./src/resources/dash-api/v2/users/users.ts">retrieveSubscriptionSummary</a>(appUserID, { ...params }) -> UserRetrieveSubscriptionSummaryResponse</code>

#### Events

Types:

- <code><a href="./src/resources/dash-api/v2/users/events.ts">EventRetrieveResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/users/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /dash-api/v2/users/events/{event_id}">client.dashAPI.v2.users.events.<a href="./src/resources/dash-api/v2/users/events.ts">retrieve</a>(eventID, { ...params }) -> EventRetrieveResponse</code>
- <code title="get /dash-api/v2/users/{app_user_id}/events">client.dashAPI.v2.users.events.<a href="./src/resources/dash-api/v2/users/events.ts">list</a>(appUserID, { ...params }) -> EventListResponse</code>

#### TestMode

Types:

- <code><a href="./src/resources/dash-api/v2/users/test-mode.ts">TestModeRetrieveTestModeResponse</a></code>
- <code><a href="./src/resources/dash-api/v2/users/test-mode.ts">TestModeUpdateTestModeResponse</a></code>

Methods:

- <code title="get /dash-api/v2/users/test-mode">client.dashAPI.v2.users.testMode.<a href="./src/resources/dash-api/v2/users/test-mode.ts">retrieveTestMode</a>({ ...params }) -> TestModeRetrieveTestModeResponse</code>
- <code title="patch /dash-api/v2/users/{app_user_id}/test-mode">client.dashAPI.v2.users.testMode.<a href="./src/resources/dash-api/v2/users/test-mode.ts">updateTestMode</a>(appUserID, { ...params }) -> TestModeUpdateTestModeResponse</code>
