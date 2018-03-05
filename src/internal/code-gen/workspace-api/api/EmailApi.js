/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AcceptData6', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/CreateData', 'model/ReplyData', 'model/SaveData', 'model/SendData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AcceptData6'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/CreateData'), require('../model/ReplyData'), require('../model/SaveData'), require('../model/SendData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.EmailApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.AcceptData6, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.CreateData, root.WorkspaceApi.ReplyData, root.WorkspaceApi.SaveData, root.WorkspaceApi.SendData);
  }
}(this, function(ApiClient, AcceptData6, ApiErrorResponse, ApiSuccessResponse, CreateData, ReplyData, SaveData, SendData) {
  'use strict';

  /**
   * Email service.
   * @module api/EmailApi
   * @version 1.0.0
   */

  /**
   * Constructs a new EmailApi. 
   * @alias module:api/EmailApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Accept the email interaction
     * Accept the interaction specified in the id path parameter
     * @param {String} id id of interaction to accept
     * @param {Object} opts Optional parameters
     * @param {module:model/AcceptData6} opts.acceptData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.acceptEmailWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['acceptData'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling acceptEmail");
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
        '/media/email/interactions/{id}/accept', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Accept the email interaction
     * Accept the interaction specified in the id path parameter
     * @param {String} id id of interaction to accept
     * @param {Object} opts Optional parameters
     * @param {module:model/AcceptData6} opts.acceptData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.acceptEmail = function(id, opts) {
      return this.acceptEmailWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * cancel the outbound email interaction
     * Cancel the interaction specified in the id path parameter
     * @param {String} id id of interaction to cancel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.cancelEmailWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelEmail");
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
        '/media/email/interactions/{id}/cancel', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * cancel the outbound email interaction
     * Cancel the interaction specified in the id path parameter
     * @param {String} id id of interaction to cancel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.cancelEmail = function(id) {
      return this.cancelEmailWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create email interaction
     * Create a new email interaction
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateData} opts.createData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.createEmailWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['createData'];


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
        '/media/email/interactions/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create email interaction
     * Create a new email interaction
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateData} opts.createData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.createEmail = function(opts) {
      return this.createEmailWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * reply email
     * Reply to inbound email interaction specified in the id path parameter
     * @param {String} id id of interaction to reply
     * @param {Object} opts Optional parameters
     * @param {module:model/ReplyData} opts.replyData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.replyWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['replyData'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling reply");
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
        '/media/email/interactions/{id}/reply', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * reply email
     * Reply to inbound email interaction specified in the id path parameter
     * @param {String} id id of interaction to reply
     * @param {Object} opts Optional parameters
     * @param {module:model/ReplyData} opts.replyData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.reply = function(id, opts) {
      return this.replyWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Save email information to UCS
     * Save email information of interaction specified in the id path parameter
     * @param {String} id id of interaction to save
     * @param {Object} opts Optional parameters
     * @param {module:model/SaveData} opts.saveData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.saveEmailWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['saveData'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling saveEmail");
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
        '/media/email/interactions/{id}/save', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Save email information to UCS
     * Save email information of interaction specified in the id path parameter
     * @param {String} id id of interaction to save
     * @param {Object} opts Optional parameters
     * @param {module:model/SaveData} opts.saveData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.saveEmail = function(id, opts) {
      return this.saveEmailWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send email
     * Send email interaction specified in the id path parameter
     * @param {String} id id of interaction to send
     * @param {Object} opts Optional parameters
     * @param {module:model/SendData} opts.sendData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.sendEmailWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['sendData'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sendEmail");
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
        '/media/email/interactions/{id}/send', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send email
     * Send email interaction specified in the id path parameter
     * @param {String} id id of interaction to send
     * @param {Object} opts Optional parameters
     * @param {module:model/SendData} opts.sendData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.sendEmail = function(id, opts) {
      return this.sendEmailWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
