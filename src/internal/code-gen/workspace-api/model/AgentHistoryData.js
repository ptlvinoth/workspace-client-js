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
    define(['ApiClient', 'model/UcsgetagenthistoryData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UcsgetagenthistoryData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.AgentHistoryData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.UcsgetagenthistoryData);
  }
}(this, function(ApiClient, UcsgetagenthistoryData) {
  'use strict';




  /**
   * The AgentHistoryData model module.
   * @module model/AgentHistoryData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AgentHistoryData</code>.
   * @alias module:model/AgentHistoryData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AgentHistoryData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentHistoryData} obj Optional instance to populate.
   * @return {module:model/AgentHistoryData} The populated <code>AgentHistoryData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UcsgetagenthistoryData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UcsgetagenthistoryData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


