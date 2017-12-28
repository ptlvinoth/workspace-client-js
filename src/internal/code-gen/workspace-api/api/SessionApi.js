/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/ChannelsData', 'model/ConfigResponse', 'model/CurrentSession', 'model/Devices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/ChannelsData'), require('../model/ConfigResponse'), require('../model/CurrentSession'), require('../model/Devices'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.SessionApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.ChannelsData, root.WorkspaceApi.ConfigResponse, root.WorkspaceApi.CurrentSession, root.WorkspaceApi.Devices);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, ChannelsData, ConfigResponse, CurrentSession, Devices) {
  'use strict';

  /**
   * Session service.
   * @module api/SessionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SessionApi. 
   * @alias module:api/SessionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Activate channels for the user with the specified resources.
     * Activates the specified channels using the provided resources. If the channels are successfully activated, Workspace sends additional information about the state of active resources (DNs, channels) via events. The resources you provide are associated with the agent for the duration of the session. You should send this request after making an &#x60;/workspace/v3/initialize-workspace&#x60; request and getting the WorkspaceInitializationComplete message through CometD.
     * @param {module:model/ChannelsData} channelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.activateChannelsWithHttpInfo = function(channelsData) {
      var postBody = channelsData;

      // verify the required parameter 'channelsData' is set
      if (channelsData === undefined || channelsData === null) {
        throw new Error("Missing the required parameter 'channelsData' when calling activateChannels");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/activate-channels', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Activate channels for the user with the specified resources.
     * Activates the specified channels using the provided resources. If the channels are successfully activated, Workspace sends additional information about the state of active resources (DNs, channels) via events. The resources you provide are associated with the agent for the duration of the session. You should send this request after making an &#x60;/workspace/v3/initialize-workspace&#x60; request and getting the WorkspaceInitializationComplete message through CometD.
     * @param {module:model/ChannelsData} channelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.activateChannels = function(channelsData) {
      return this.activateChannelsWithHttpInfo(channelsData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the business attribute hierarchy.
     * Returns the business attribute hierarchy for the specified business attribute.
     * @param {Number} id The unique ID of the business attribute.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getBusinessAttributeHierarchyWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBusinessAttributeHierarchy");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/configuration/business-attribute/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the business attribute hierarchy.
     * Returns the business attribute hierarchy for the specified business attribute.
     * @param {Number} id The unique ID of the business attribute.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getBusinessAttributeHierarchy = function(id) {
      return this.getBusinessAttributeHierarchyWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get settings, action codes, business attributes and other configuration.
     * Returns all configuration items needed by the user interface. This includes action codes, business attributes, transactions and settings at the moment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.types A comma delimited list of types used to specify what content should be returned. If not specified the default is &#39;actionCodes, agentGroups,settings&#39;. Valid values are &#x60;actionCodes&#x60;, &#x60;agentGroups&#x60;, &#x60;settings&#x60;, &#x60;workspaceTransactions&#x60;, and &#x60;businessAttributes&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigResponse} and HTTP response
     */
    this.getConfigurationWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'types': opts['types'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ConfigResponse;

      return this.apiClient.callApi(
        '/configuration', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get settings, action codes, business attributes and other configuration.
     * Returns all configuration items needed by the user interface. This includes action codes, business attributes, transactions and settings at the moment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.types A comma delimited list of types used to specify what content should be returned. If not specified the default is &#39;actionCodes, agentGroups,settings&#39;. Valid values are &#x60;actionCodes&#x60;, &#x60;agentGroups&#x60;, &#x60;settings&#x60;, &#x60;workspaceTransactions&#x60;, and &#x60;businessAttributes&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigResponse}
     */
    this.getConfiguration = function(opts) {
      return this.getConfigurationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read information about the logged in user, including any existing media logins and calls.
     * This request can be used to retrieve information about the current user. This can be done at startup to check for an existing session. The returned user information includes state recovery information about the active session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CurrentSession} and HTTP response
     */
    this.getCurrentSessionWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CurrentSession;

      return this.apiClient.callApi(
        '/current-session', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Read information about the logged in user, including any existing media logins and calls.
     * This request can be used to retrieve information about the current user. This can be done at startup to check for an existing session. The returned user information includes state recovery information about the active session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CurrentSession}
     */
    this.getCurrentSession = function() {
      return this.getCurrentSessionWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get DNs for a place.
     * Returns the DNs attached to the specified place.
     * @param {String} placeName The name of the place.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Devices} and HTTP response
     */
    this.getDevicesForPlaceWithHttpInfo = function(placeName) {
      var postBody = null;

      // verify the required parameter 'placeName' is set
      if (placeName === undefined || placeName === null) {
        throw new Error("Missing the required parameter 'placeName' when calling getDevicesForPlace");
      }


      var pathParams = {
        'placeName': placeName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Devices;

      return this.apiClient.callApi(
        '/configuration/places/{placeName}/dns', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get DNs for a place.
     * Returns the DNs attached to the specified place.
     * @param {String} placeName The name of the place.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Devices}
     */
    this.getDevicesForPlace = function(placeName) {
      return this.getDevicesForPlaceWithHttpInfo(placeName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve ecrypted data about the current user
     * This request can be used to retrieve ecrypted data about the user to use with other services
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CurrentSession} and HTTP response
     */
    this.getUserInfoWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CurrentSession;

      return this.apiClient.callApi(
        '/userinfo', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve ecrypted data about the current user
     * This request can be used to retrieve ecrypted data about the user to use with other services
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CurrentSession}
     */
    this.getUserInfo = function() {
      return this.getUserInfoWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves and registers an authorization token.
     * Retrieves the authorization token using the authorization code. Workspace then registers the token and prepares the user&#39;s environment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.code The authorization code. You must include this parameter if you use the [Authorization Code Grant flow] (/reference/authentication/).
     * @param {String} opts.redirectUri The same redirect URI you used in the initial login step. You must include this parameter if you follow the [Authorization Code Grant flow](/reference/authentication/).
     * @param {String} opts.authorization If you use the [Resource Owner Password Credentials Grant](/reference/authentication/), this parameter must contain Bearer authorization. For example: &#39;Authorization: Bearer access_token&#39;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.initializeWorkspaceWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'code': opts['code'],
        'redirect_uri': opts['redirectUri'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/initialize-workspace', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves and registers an authorization token.
     * Retrieves the authorization token using the authorization code. Workspace then registers the token and prepares the user&#39;s environment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.code The authorization code. You must include this parameter if you use the [Authorization Code Grant flow] (/reference/authentication/).
     * @param {String} opts.redirectUri The same redirect URI you used in the initial login step. You must include this parameter if you follow the [Authorization Code Grant flow](/reference/authentication/).
     * @param {String} opts.authorization If you use the [Resource Owner Password Credentials Grant](/reference/authentication/), this parameter must contain Bearer authorization. For example: &#39;Authorization: Bearer access_token&#39;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.initializeWorkspace = function(opts) {
      return this.initializeWorkspaceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Login the specified user (HTTP session only).
     * The login request authenticates the user and retrieves the authorization code.
     * @param {String} redirectUri The URI the Authentication API uses to redirect the user after authentication.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.loginWithHttpInfo = function(redirectUri) {
      var postBody = null;

      // verify the required parameter 'redirectUri' is set
      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling login");
      }


      var pathParams = {
      };
      var queryParams = {
        'redirect_uri': redirectUri,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/login', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Login the specified user (HTTP session only).
     * The login request authenticates the user and retrieves the authorization code.
     * @param {String} redirectUri The URI the Authentication API uses to redirect the user after authentication.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.login = function(redirectUri) {
      return this.loginWithHttpInfo(redirectUri)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logout of activated channels and end the session.
     * Ends the current agent&#39;s session. This request logs out the agent on all activated channels, ends the HTTP session, and cleans up related resources. Genesys recommends that you first disconnect CometD and then make this request. After you end the session, you&#39;ll need to make a login request before making any new calls to the API.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.logoutWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/logout', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Logout of activated channels and end the session.
     * Ends the current agent&#39;s session. This request logs out the agent on all activated channels, ends the HTTP session, and cleans up related resources. Genesys recommends that you first disconnect CometD and then make this request. After you end the session, you&#39;ll need to make a login request before making any new calls to the API.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.logout = function() {
      return this.logoutWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
