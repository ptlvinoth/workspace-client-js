/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.72.3561
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MediamediatypeinteractionsidsetcommentData', 'model/OperationId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamediatypeinteractionsidsetcommentData'), require('./OperationId'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.AddCommentData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamediatypeinteractionsidsetcommentData, root.WorkspaceApi.OperationId);
  }
}(this, function(ApiClient, MediamediatypeinteractionsidsetcommentData, OperationId) {
  'use strict';




  /**
   * The AddCommentData model module.
   * @module model/AddCommentData
   * @version 9.0.000.72.3561
   */

  /**
   * Constructs a new <code>AddCommentData</code>.
   * @alias module:model/AddCommentData
   * @class
   * @param data {module:model/MediamediatypeinteractionsidsetcommentData} 
   */
  var exports = function(data) {
    var _this = this;


    _this['data'] = data;
  };

  /**
   * Constructs a <code>AddCommentData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddCommentData} obj Optional instance to populate.
   * @return {module:model/AddCommentData} The populated <code>AddCommentData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamediatypeinteractionsidsetcommentData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/MediamediatypeinteractionsidsetcommentData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


