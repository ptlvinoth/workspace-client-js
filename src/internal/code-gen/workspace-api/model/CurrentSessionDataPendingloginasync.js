/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.23.2279
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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.CurrentSessionDataPendingloginasync = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The CurrentSessionDataPendingloginasync model module.
   * @module model/CurrentSessionDataPendingloginasync
   * @version 9.0.000.23.2279
   */

  /**
   * Constructs a new <code>CurrentSessionDataPendingloginasync</code>.
   * @alias module:model/CurrentSessionDataPendingloginasync
   * @class
   * @param state {module:model/CurrentSessionDataPendingloginasync.StateEnum} 
   * @param actualWaitTime {Number} 
   * @param submittedAt {String} 
   */
  var exports = function(state, actualWaitTime, submittedAt) {
    var _this = this;

    _this['state'] = state;
    _this['actualWaitTime'] = actualWaitTime;
    _this['submittedAt'] = submittedAt;

  };

  /**
   * Constructs a <code>CurrentSessionDataPendingloginasync</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrentSessionDataPendingloginasync} obj Optional instance to populate.
   * @return {module:model/CurrentSessionDataPendingloginasync} The populated <code>CurrentSessionDataPendingloginasync</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('actualWaitTime')) {
        obj['actualWaitTime'] = ApiClient.convertToType(data['actualWaitTime'], 'Number');
      }
      if (data.hasOwnProperty('submittedAt')) {
        obj['submittedAt'] = ApiClient.convertToType(data['submittedAt'], 'String');
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CurrentSessionDataPendingloginasync.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Number} actualWaitTime
   */
  exports.prototype['actualWaitTime'] = undefined;
  /**
   * @member {String} submittedAt
   */
  exports.prototype['submittedAt'] = undefined;
  /**
   * @member {Array.<module:model/Kvpair>} errors
   */
  exports.prototype['errors'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "NotStarted"
     * @const
     */
    "NotStarted": "NotStarted",
    /**
     * value: "Executing"
     * @const
     */
    "Executing": "Executing",
    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed",
    /**
     * value: "Complete"
     * @const
     */
    "Complete": "Complete"  };


  return exports;
}));


