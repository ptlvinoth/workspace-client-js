/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.24.2336
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/PersonalFavoriteData', 'model/RecentTargetData', 'model/TargetsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/PersonalFavoriteData'), require('../model/RecentTargetData'), require('../model/TargetsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.TargetsApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.PersonalFavoriteData, root.WorkspaceApi.RecentTargetData, root.WorkspaceApi.TargetsResponse);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, PersonalFavoriteData, RecentTargetData, TargetsResponse) {
  'use strict';

  /**
   * Targets service.
   * @module api/TargetsApi
   * @version 9.0.000.24.2336
   */

  /**
   * Constructs a new TargetsApi. 
   * @alias module:api/TargetsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Acknowledge missed calls.
     * Acknowledge missed calls in the list of recent targets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.ackRecentMissedCallsWithHttpInfo = function() {
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
        '/targets/recents/ack-missed-calls', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Acknowledge missed calls.
     * Acknowledge missed calls in the list of recent targets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.ackRecentMissedCalls = function() {
      return this.ackRecentMissedCallsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add a target.
     * Add a target that the agent recently used.
     * @param {module:model/RecentTargetData} recentTargetData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.addRecentTargetWithHttpInfo = function(recentTargetData) {
      var postBody = recentTargetData;

      // verify the required parameter 'recentTargetData' is set
      if (recentTargetData === undefined || recentTargetData === null) {
        throw new Error("Missing the required parameter 'recentTargetData' when calling addRecentTarget");
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
        '/targets/recents/add', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a target.
     * Add a target that the agent recently used.
     * @param {module:model/RecentTargetData} recentTargetData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.addRecentTarget = function(recentTargetData) {
      return this.addRecentTargetWithHttpInfo(recentTargetData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a target.
     * Delete the target from the agent&#39;s personal favorites.
     * @param {String} id The ID of the target.
     * @param {module:model/String} type The type of target.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.deletePersonalFavoriteWithHttpInfo = function(id, type) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePersonalFavorite");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling deletePersonalFavorite");
      }


      var pathParams = {
        'id': id,
        'type': type
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
        '/targets/personal-favorites/delete/{type}/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a target.
     * Delete the target from the agent&#39;s personal favorites.
     * @param {String} id The ID of the target.
     * @param {module:model/String} type The type of target.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.deletePersonalFavorite = function(id, type) {
      return this.deletePersonalFavoriteWithHttpInfo(id, type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get personal favorites.
     * Get the agent&#39;s personal favorites.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return. The default value is 50.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TargetsResponse} and HTTP response
     */
    this.getPersonalFavoritesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
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
      var returnType = TargetsResponse;

      return this.apiClient.callApi(
        '/targets/personal-favorites', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get personal favorites.
     * Get the agent&#39;s personal favorites.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return. The default value is 50.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TargetsResponse}
     */
    this.getPersonalFavorites = function(opts) {
      return this.getPersonalFavoritesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get recently used targets.
     * Get recently used targets for the current agent.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of results to return. The default value is 50.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TargetsResponse} and HTTP response
     */
    this.getRecentTargetsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
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
      var returnType = TargetsResponse;

      return this.apiClient.callApi(
        '/targets/recents', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get recently used targets.
     * Get recently used targets for the current agent.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of results to return. The default value is 50.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TargetsResponse}
     */
    this.getRecentTargets = function(opts) {
      return this.getRecentTargetsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a target.
     * Get a specific target by type and ID. Targets can be agents, agent groups, queues, route points, skills, and custom contacts.
     * @param {Number} id The ID of the target.
     * @param {module:model/String} type The type of target to retrieve.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TargetsResponse} and HTTP response
     */
    this.getTargetWithHttpInfo = function(id, type) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTarget");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getTarget");
      }


      var pathParams = {
        'id': id,
        'type': type
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
      var returnType = TargetsResponse;

      return this.apiClient.callApi(
        '/targets/{type}/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a target.
     * Get a specific target by type and ID. Targets can be agents, agent groups, queues, route points, skills, and custom contacts.
     * @param {Number} id The ID of the target.
     * @param {module:model/String} type The type of target to retrieve.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TargetsResponse}
     */
    this.getTarget = function(id, type) {
      return this.getTargetWithHttpInfo(id, type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for targets.
     * Search for targets by the specified search term.
     * @param {String} searchTerm The text to search for in targets.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter the search based on this field.
     * @param {String} opts.types A comma-separated list of types to include in the search. Valid values are &#x60;acd-queue&#x60;, &#x60;agent-group&#x60;, &#x60;agent&#x60;, &#x60;queue&#x60;, &#x60;route-point&#x60;, &#x60;skill&#x60;, and &#x60;custom-contact&#x60;.
     * @param {String} opts.excludeGroup A comma-separated list of agent group names. Workspace excludes those groups from the search.
     * @param {String} opts.restrictGroup A comma-separated list of agent group names. Workspace returns only these groups from the search.
     * @param {String} opts.excludeFromGroup A comma-separated list of agent group names. Workspace excludes agents from these groups in the search.
     * @param {String} opts.restrictToGroup A comma-separated list of agent group names. Workspace only searches for targets who belong to the groups in this list.
     * @param {module:model/String} opts.sort The sort order, either ascending or descending. The default is descending.
     * @param {Number} opts.limit The number of results to return. The default value is 50.
     * @param {module:model/String} opts.matchType Specify whether the search should only return exact matches.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TargetsResponse} and HTTP response
     */
    this.getTargetsWithHttpInfo = function(searchTerm, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'searchTerm' is set
      if (searchTerm === undefined || searchTerm === null) {
        throw new Error("Missing the required parameter 'searchTerm' when calling getTargets");
      }


      var pathParams = {
      };
      var queryParams = {
        'searchTerm': searchTerm,
        'filterName': opts['filterName'],
        'types': opts['types'],
        'excludeGroup': opts['excludeGroup'],
        'restrictGroup': opts['restrictGroup'],
        'excludeFromGroup': opts['excludeFromGroup'],
        'restrictToGroup': opts['restrictToGroup'],
        'sort': opts['sort'],
        'limit': opts['limit'],
        'matchType': opts['matchType'],
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
      var returnType = TargetsResponse;

      return this.apiClient.callApi(
        '/targets', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search for targets.
     * Search for targets by the specified search term.
     * @param {String} searchTerm The text to search for in targets.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter the search based on this field.
     * @param {String} opts.types A comma-separated list of types to include in the search. Valid values are &#x60;acd-queue&#x60;, &#x60;agent-group&#x60;, &#x60;agent&#x60;, &#x60;queue&#x60;, &#x60;route-point&#x60;, &#x60;skill&#x60;, and &#x60;custom-contact&#x60;.
     * @param {String} opts.excludeGroup A comma-separated list of agent group names. Workspace excludes those groups from the search.
     * @param {String} opts.restrictGroup A comma-separated list of agent group names. Workspace returns only these groups from the search.
     * @param {String} opts.excludeFromGroup A comma-separated list of agent group names. Workspace excludes agents from these groups in the search.
     * @param {String} opts.restrictToGroup A comma-separated list of agent group names. Workspace only searches for targets who belong to the groups in this list.
     * @param {module:model/String} opts.sort The sort order, either ascending or descending. The default is descending.
     * @param {Number} opts.limit The number of results to return. The default value is 50.
     * @param {module:model/String} opts.matchType Specify whether the search should only return exact matches.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TargetsResponse}
     */
    this.getTargets = function(searchTerm, opts) {
      return this.getTargetsWithHttpInfo(searchTerm, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Save a personal favorite.
     * Save a target to the agent&#39;s personal favorites in the specified category.
     * @param {module:model/PersonalFavoriteData} personalFavoriteData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.savePersonalFavoriteWithHttpInfo = function(personalFavoriteData) {
      var postBody = personalFavoriteData;

      // verify the required parameter 'personalFavoriteData' is set
      if (personalFavoriteData === undefined || personalFavoriteData === null) {
        throw new Error("Missing the required parameter 'personalFavoriteData' when calling savePersonalFavorite");
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
        '/targets/personal-favorites/save', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Save a personal favorite.
     * Save a target to the agent&#39;s personal favorites in the specified category.
     * @param {module:model/PersonalFavoriteData} personalFavoriteData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.savePersonalFavorite = function(personalFavoriteData) {
      return this.savePersonalFavoriteWithHttpInfo(personalFavoriteData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
