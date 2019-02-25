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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamediatypeinteractionsidtransferagentData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The MediamediatypeinteractionsidtransferagentData model module.
   * @module model/MediamediatypeinteractionsidtransferagentData
   * @version 9.0.000.33.2671
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionsidtransferagentData</code>.
   * @alias module:model/MediamediatypeinteractionsidtransferagentData
   * @class
   * @param agentId {String} The unique ID of the agent.
   */
  var exports = function(agentId) {
    var _this = this;

    _this['agentId'] = agentId;

  };

  /**
   * Constructs a <code>MediamediatypeinteractionsidtransferagentData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionsidtransferagentData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionsidtransferagentData} The populated <code>MediamediatypeinteractionsidtransferagentData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentId')) {
        obj['agentId'] = ApiClient.convertToType(data['agentId'], 'String');
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * The unique ID of the agent.
   * @member {String} agentId
   */
  exports.prototype['agentId'] = undefined;
  /**
   * A collection of key/value pairs.
   * @member {Array.<module:model/Kvpair>} extension
   */
  exports.prototype['extension'] = undefined;



  return exports;
}));


