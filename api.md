# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectUpdateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectArchiveResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectUnarchiveResponse</a></code>

Methods:

- <code title="post /v2/projects">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /v2/projects/{id}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>(id) -> ProjectRetrieveResponse</code>
- <code title="patch /v2/projects/{id}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>(id, { ...params }) -> ProjectUpdateResponse</code>
- <code title="get /v2/projects">client.projects.<a href="./src/resources/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="post /v2/projects/{id}/archive">client.projects.<a href="./src/resources/projects/projects.ts">archive</a>(id) -> ProjectArchiveResponse</code>
- <code title="post /v2/projects/{id}/unarchive">client.projects.<a href="./src/resources/projects/projects.ts">unarchive</a>(id) -> ProjectUnarchiveResponse</code>

## Applications

Types:

- <code><a href="./src/resources/projects/applications.ts">ApplicationCreateResponse</a></code>
- <code><a href="./src/resources/projects/applications.ts">ApplicationUpdateResponse</a></code>
- <code><a href="./src/resources/projects/applications.ts">ApplicationGetStatisticsResponse</a></code>
- <code><a href="./src/resources/projects/applications.ts">ApplicationListRecentTransactionsResponse</a></code>
- <code><a href="./src/resources/projects/applications.ts">ApplicationUpdateSettingsResponse</a></code>

Methods:

- <code title="post /v2/projects/{id}/applications">client.projects.applications.<a href="./src/resources/projects/applications.ts">create</a>(id, { ...params }) -> ApplicationCreateResponse</code>
- <code title="patch /v2/projects/{id}/applications/{application_id}">client.projects.applications.<a href="./src/resources/projects/applications.ts">update</a>(applicationID, { ...params }) -> ApplicationUpdateResponse</code>
- <code title="get /v2/projects/{id}/applications/{application_id}/statistics">client.projects.applications.<a href="./src/resources/projects/applications.ts">getStatistics</a>(applicationID, { ...params }) -> ApplicationGetStatisticsResponse</code>
- <code title="get /v2/projects/{id}/applications/{application_id}/recent-transactions">client.projects.applications.<a href="./src/resources/projects/applications.ts">listRecentTransactions</a>(applicationID, { ...params }) -> ApplicationListRecentTransactionsResponse</code>
- <code title="patch /v2/projects/{id}/applications/{application_id}/settings">client.projects.applications.<a href="./src/resources/projects/applications.ts">updateSettings</a>(applicationID, { ...params }) -> ApplicationUpdateSettingsResponse</code>

## WebhookEndpoints

Types:

- <code><a href="./src/resources/projects/webhook-endpoints.ts">WebhookEndpointCreateResponse</a></code>
- <code><a href="./src/resources/projects/webhook-endpoints.ts">WebhookEndpointRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/webhook-endpoints.ts">WebhookEndpointUpdateResponse</a></code>
- <code><a href="./src/resources/projects/webhook-endpoints.ts">WebhookEndpointListResponse</a></code>
- <code><a href="./src/resources/projects/webhook-endpoints.ts">WebhookEndpointDeleteResponse</a></code>
- <code><a href="./src/resources/projects/webhook-endpoints.ts">WebhookEndpointRotateSecretResponse</a></code>

Methods:

- <code title="post /v2/projects/{project_id}/webhook_endpoints">client.projects.webhookEndpoints.<a href="./src/resources/projects/webhook-endpoints.ts">create</a>(projectID, { ...params }) -> WebhookEndpointCreateResponse</code>
- <code title="get /v2/projects/{project_id}/webhook_endpoints/{endpoint_id}">client.projects.webhookEndpoints.<a href="./src/resources/projects/webhook-endpoints.ts">retrieve</a>(endpointID, { ...params }) -> WebhookEndpointRetrieveResponse</code>
- <code title="patch /v2/projects/{project_id}/webhook_endpoints/{endpoint_id}">client.projects.webhookEndpoints.<a href="./src/resources/projects/webhook-endpoints.ts">update</a>(endpointID, { ...params }) -> WebhookEndpointUpdateResponse</code>
- <code title="get /v2/projects/{project_id}/webhook_endpoints">client.projects.webhookEndpoints.<a href="./src/resources/projects/webhook-endpoints.ts">list</a>(projectID, { ...params }) -> WebhookEndpointListResponse</code>
- <code title="delete /v2/projects/{project_id}/webhook_endpoints/{endpoint_id}">client.projects.webhookEndpoints.<a href="./src/resources/projects/webhook-endpoints.ts">delete</a>(endpointID, { ...params }) -> WebhookEndpointDeleteResponse</code>
- <code title="post /v2/projects/{project_id}/webhook_endpoints/{endpoint_id}/rotate_secret">client.projects.webhookEndpoints.<a href="./src/resources/projects/webhook-endpoints.ts">rotateSecret</a>(endpointID, { ...params }) -> WebhookEndpointRotateSecretResponse</code>

## Events

Types:

- <code><a href="./src/resources/projects/events.ts">EventRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/events.ts">EventListResponse</a></code>
- <code><a href="./src/resources/projects/events.ts">EventListAttemptsResponse</a></code>
- <code><a href="./src/resources/projects/events.ts">EventRetryDeliveryResponse</a></code>

Methods:

- <code title="get /v2/projects/{project_id}/events/{event_id}">client.projects.events.<a href="./src/resources/projects/events.ts">retrieve</a>(eventID, { ...params }) -> EventRetrieveResponse</code>
- <code title="get /v2/projects/{project_id}/events">client.projects.events.<a href="./src/resources/projects/events.ts">list</a>(projectID, { ...params }) -> EventListResponse</code>
- <code title="get /v2/projects/{project_id}/events/{event_id}/attempts">client.projects.events.<a href="./src/resources/projects/events.ts">listAttempts</a>(eventID, { ...params }) -> EventListAttemptsResponse</code>
- <code title="post /v2/projects/{project_id}/events/{event_id}/retry">client.projects.events.<a href="./src/resources/projects/events.ts">retryDelivery</a>(eventID, { ...params }) -> EventRetryDeliveryResponse</code>

# Me

## Organizations

Types:

- <code><a href="./src/resources/me/organizations.ts">OrganizationCreateResponse</a></code>
- <code><a href="./src/resources/me/organizations.ts">OrganizationListResponse</a></code>

Methods:

- <code title="post /v2/me/organizations">client.me.organizations.<a href="./src/resources/me/organizations.ts">create</a>({ ...params }) -> OrganizationCreateResponse</code>
- <code title="get /v2/me/organizations">client.me.organizations.<a href="./src/resources/me/organizations.ts">list</a>() -> OrganizationListResponse</code>

# Paywalls

Types:

- <code><a href="./src/resources/paywalls/paywalls.ts">PaywallCreateResponse</a></code>
- <code><a href="./src/resources/paywalls/paywalls.ts">PaywallRetrieveResponse</a></code>
- <code><a href="./src/resources/paywalls/paywalls.ts">PaywallUpdateResponse</a></code>
- <code><a href="./src/resources/paywalls/paywalls.ts">PaywallListResponse</a></code>
- <code><a href="./src/resources/paywalls/paywalls.ts">PaywallArchiveResponse</a></code>
- <code><a href="./src/resources/paywalls/paywalls.ts">PaywallPublishResponse</a></code>
- <code><a href="./src/resources/paywalls/paywalls.ts">PaywallUnarchiveResponse</a></code>

Methods:

- <code title="post /v2/paywalls">client.paywalls.<a href="./src/resources/paywalls/paywalls.ts">create</a>({ ...params }) -> PaywallCreateResponse</code>
- <code title="get /v2/paywalls/{id}">client.paywalls.<a href="./src/resources/paywalls/paywalls.ts">retrieve</a>(id) -> PaywallRetrieveResponse</code>
- <code title="patch /v2/paywalls/{id}">client.paywalls.<a href="./src/resources/paywalls/paywalls.ts">update</a>(id, { ...params }) -> PaywallUpdateResponse</code>
- <code title="get /v2/paywalls">client.paywalls.<a href="./src/resources/paywalls/paywalls.ts">list</a>({ ...params }) -> PaywallListResponse</code>
- <code title="post /v2/paywalls/{id}/archive">client.paywalls.<a href="./src/resources/paywalls/paywalls.ts">archive</a>(id) -> PaywallArchiveResponse</code>
- <code title="post /v2/paywalls/{id}/publish">client.paywalls.<a href="./src/resources/paywalls/paywalls.ts">publish</a>(id) -> PaywallPublishResponse</code>
- <code title="post /v2/paywalls/{id}/unarchive">client.paywalls.<a href="./src/resources/paywalls/paywalls.ts">unarchive</a>(id) -> PaywallUnarchiveResponse</code>

## Templates

Types:

- <code><a href="./src/resources/paywalls/templates.ts">TemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/paywalls/templates.ts">TemplateListResponse</a></code>

Methods:

- <code title="get /v2/paywalls/templates/{id}">client.paywalls.templates.<a href="./src/resources/paywalls/templates.ts">retrieve</a>(id) -> TemplateRetrieveResponse</code>
- <code title="get /v2/paywalls/templates">client.paywalls.templates.<a href="./src/resources/paywalls/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductDeleteResponse</a></code>

Methods:

- <code title="post /v2/products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="get /v2/products/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(id) -> ProductRetrieveResponse</code>
- <code title="patch /v2/products/{id}">client.products.<a href="./src/resources/products.ts">update</a>(id, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /v2/products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ProductListResponse</code>
- <code title="delete /v2/products/{id}">client.products.<a href="./src/resources/products.ts">delete</a>(id) -> ProductDeleteResponse</code>

# Campaigns

Types:

- <code><a href="./src/resources/campaigns/campaigns.ts">CampaignCreateResponse</a></code>
- <code><a href="./src/resources/campaigns/campaigns.ts">CampaignRetrieveResponse</a></code>
- <code><a href="./src/resources/campaigns/campaigns.ts">CampaignUpdateResponse</a></code>
- <code><a href="./src/resources/campaigns/campaigns.ts">CampaignListResponse</a></code>
- <code><a href="./src/resources/campaigns/campaigns.ts">CampaignArchiveResponse</a></code>
- <code><a href="./src/resources/campaigns/campaigns.ts">CampaignUnarchiveResponse</a></code>
- <code><a href="./src/resources/campaigns/campaigns.ts">CampaignUpdateAudienceResponse</a></code>

Methods:

- <code title="post /v2/campaigns">client.campaigns.<a href="./src/resources/campaigns/campaigns.ts">create</a>({ ...params }) -> CampaignCreateResponse</code>
- <code title="get /v2/campaigns/{id}">client.campaigns.<a href="./src/resources/campaigns/campaigns.ts">retrieve</a>(id) -> CampaignRetrieveResponse</code>
- <code title="patch /v2/campaigns/{id}">client.campaigns.<a href="./src/resources/campaigns/campaigns.ts">update</a>(id, { ...params }) -> CampaignUpdateResponse</code>
- <code title="get /v2/campaigns">client.campaigns.<a href="./src/resources/campaigns/campaigns.ts">list</a>({ ...params }) -> CampaignListResponse</code>
- <code title="post /v2/campaigns/{id}/archive">client.campaigns.<a href="./src/resources/campaigns/campaigns.ts">archive</a>(id) -> CampaignArchiveResponse</code>
- <code title="post /v2/campaigns/{id}/unarchive">client.campaigns.<a href="./src/resources/campaigns/campaigns.ts">unarchive</a>(id) -> CampaignUnarchiveResponse</code>
- <code title="patch /v2/campaigns/{id}/audiences/{audience_id}">client.campaigns.<a href="./src/resources/campaigns/campaigns.ts">updateAudience</a>(audienceID, { ...params }) -> CampaignUpdateAudienceResponse</code>

## Placements

Types:

- <code><a href="./src/resources/campaigns/placements.ts">PlacementUpdateResponse</a></code>
- <code><a href="./src/resources/campaigns/placements.ts">PlacementAddResponse</a></code>
- <code><a href="./src/resources/campaigns/placements.ts">PlacementRemoveResponse</a></code>

Methods:

- <code title="patch /v2/campaigns/{id}/placements/{placement_id}">client.campaigns.placements.<a href="./src/resources/campaigns/placements.ts">update</a>(placementID, { ...params }) -> PlacementUpdateResponse</code>
- <code title="post /v2/campaigns/{id}/placements">client.campaigns.placements.<a href="./src/resources/campaigns/placements.ts">add</a>(id, { ...params }) -> PlacementAddResponse</code>
- <code title="delete /v2/campaigns/{id}/placements/{placement_id}">client.campaigns.placements.<a href="./src/resources/campaigns/placements.ts">remove</a>(placementID, { ...params }) -> PlacementRemoveResponse</code>

# Entitlements

Types:

- <code><a href="./src/resources/entitlements/entitlements.ts">EntitlementCreateResponse</a></code>
- <code><a href="./src/resources/entitlements/entitlements.ts">EntitlementRetrieveResponse</a></code>
- <code><a href="./src/resources/entitlements/entitlements.ts">EntitlementUpdateResponse</a></code>
- <code><a href="./src/resources/entitlements/entitlements.ts">EntitlementListResponse</a></code>
- <code><a href="./src/resources/entitlements/entitlements.ts">EntitlementDeleteResponse</a></code>

Methods:

- <code title="post /v2/entitlements">client.entitlements.<a href="./src/resources/entitlements/entitlements.ts">create</a>({ ...params }) -> EntitlementCreateResponse</code>
- <code title="get /v2/entitlements/{id}">client.entitlements.<a href="./src/resources/entitlements/entitlements.ts">retrieve</a>(id) -> EntitlementRetrieveResponse</code>
- <code title="patch /v2/entitlements/{id}">client.entitlements.<a href="./src/resources/entitlements/entitlements.ts">update</a>(id, { ...params }) -> EntitlementUpdateResponse</code>
- <code title="get /v2/entitlements">client.entitlements.<a href="./src/resources/entitlements/entitlements.ts">list</a>({ ...params }) -> EntitlementListResponse</code>
- <code title="delete /v2/entitlements/{id}">client.entitlements.<a href="./src/resources/entitlements/entitlements.ts">delete</a>(id) -> EntitlementDeleteResponse</code>

## Grants

Types:

- <code><a href="./src/resources/entitlements/grants.ts">GrantCreateResponse</a></code>
- <code><a href="./src/resources/entitlements/grants.ts">GrantListResponse</a></code>
- <code><a href="./src/resources/entitlements/grants.ts">GrantRevokeResponse</a></code>

Methods:

- <code title="post /v2/entitlements/{id}/grants">client.entitlements.grants.<a href="./src/resources/entitlements/grants.ts">create</a>(id, { ...params }) -> GrantCreateResponse</code>
- <code title="get /v2/entitlements/{id}/grants">client.entitlements.grants.<a href="./src/resources/entitlements/grants.ts">list</a>(id, { ...params }) -> GrantListResponse</code>
- <code title="delete /v2/entitlements/{id}/grants/{grant_id}">client.entitlements.grants.<a href="./src/resources/entitlements/grants.ts">revoke</a>(grantID, { ...params }) -> GrantRevokeResponse</code>

# Grants

Types:

- <code><a href="./src/resources/grants.ts">GrantListResponse</a></code>

Methods:

- <code title="get /v2/grants">client.grants.<a href="./src/resources/grants.ts">list</a>({ ...params }) -> GrantListResponse</code>

# Charts

Types:

- <code><a href="./src/resources/charts.ts">ChartGetDefinitionsResponse</a></code>
- <code><a href="./src/resources/charts.ts">ChartQueryDataResponse</a></code>

Methods:

- <code title="get /v2/charts/definitions">client.charts.<a href="./src/resources/charts.ts">getDefinitions</a>({ ...params }) -> ChartGetDefinitionsResponse</code>
- <code title="post /v2/charts/data">client.charts.<a href="./src/resources/charts.ts">queryData</a>({ ...params }) -> ChartQueryDataResponse</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">BooleanFromString</a></code>
- <code><a href="./src/resources/users/users.ts">UserListEventNamesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserListFilterPropertiesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserResolveResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserRetrieveActiveEntitlementsResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserRetrieveAttributesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserRetrieveDeviceAttributesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserRetrieveSubscriptionSummaryResponse</a></code>

Methods:

- <code title="get /v2/users/event-names">client.users.<a href="./src/resources/users/users.ts">listEventNames</a>({ ...params }) -> UserListEventNamesResponse</code>
- <code title="get /v2/users/filter-properties">client.users.<a href="./src/resources/users/users.ts">listFilterProperties</a>({ ...params }) -> UserListFilterPropertiesResponse</code>
- <code title="get /v2/users/resolve">client.users.<a href="./src/resources/users/users.ts">resolve</a>({ ...params }) -> UserResolveResponse</code>
- <code title="get /v2/users/{app_user_id}/active-entitlements">client.users.<a href="./src/resources/users/users.ts">retrieveActiveEntitlements</a>(appUserID, { ...params }) -> UserRetrieveActiveEntitlementsResponse</code>
- <code title="get /v2/users/{app_user_id}/attributes">client.users.<a href="./src/resources/users/users.ts">retrieveAttributes</a>(appUserID, { ...params }) -> UserRetrieveAttributesResponse</code>
- <code title="get /v2/users/{app_user_id}/device-attributes">client.users.<a href="./src/resources/users/users.ts">retrieveDeviceAttributes</a>(appUserID, { ...params }) -> UserRetrieveDeviceAttributesResponse</code>
- <code title="get /v2/users/{app_user_id}/subscription-summary">client.users.<a href="./src/resources/users/users.ts">retrieveSubscriptionSummary</a>(appUserID, { ...params }) -> UserRetrieveSubscriptionSummaryResponse</code>

## Events

Types:

- <code><a href="./src/resources/users/events.ts">JsonValue</a></code>
- <code><a href="./src/resources/users/events.ts">EventRetrieveResponse</a></code>
- <code><a href="./src/resources/users/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /v2/users/events/{event_id}">client.users.events.<a href="./src/resources/users/events.ts">retrieve</a>(eventID, { ...params }) -> EventRetrieveResponse</code>
- <code title="get /v2/users/{app_user_id}/events">client.users.events.<a href="./src/resources/users/events.ts">list</a>(appUserID, { ...params }) -> EventListResponse</code>

## TestMode

Types:

- <code><a href="./src/resources/users/test-mode.ts">TestModeUpdateResponse</a></code>
- <code><a href="./src/resources/users/test-mode.ts">TestModeListResponse</a></code>

Methods:

- <code title="patch /v2/users/{app_user_id}/test-mode">client.users.testMode.<a href="./src/resources/users/test-mode.ts">update</a>(appUserID, { ...params }) -> TestModeUpdateResponse</code>
- <code title="get /v2/users/test-mode">client.users.testMode.<a href="./src/resources/users/test-mode.ts">list</a>({ ...params }) -> TestModeListResponse</code>
