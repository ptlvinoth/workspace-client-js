/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.33.2671
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
    define(['ApiClient', 'model/MediachatinteractionsidleaveData', 'model/OperationId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediachatinteractionsidleaveData'), require('./OperationId'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.LeaveData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediachatinteractionsidleaveData, root.WorkspaceApi.OperationId);
  }
}(this, function(ApiClient, MediachatinteractionsidleaveData, OperationId) {
  'use strict';




  /**
   * The LeaveData model module.
   * @module model/LeaveData
   * @version 9.0.000.33.2671
   */

  /**
   * Constructs a new <code>LeaveData</code>.
   * @alias module:model/LeaveData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>LeaveData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LeaveData} obj Optional instance to populate.
   * @return {module:model/LeaveData} The populated <code>LeaveData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = MediachatinteractionsidleaveData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/MediachatinteractionsidleaveData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


