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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediachatinteractionsidremovefromconferenceData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediachatinteractionsidremovefromconferenceData model module.
   * @module model/MediachatinteractionsidremovefromconferenceData
   * @version 9.0.000.23.2279
   */

  /**
   * Constructs a new <code>MediachatinteractionsidremovefromconferenceData</code>.
   * @alias module:model/MediachatinteractionsidremovefromconferenceData
   * @class
   * @param agentId {String} The unique ID of the agent to remove from the conference.
   */
  var exports = function(agentId) {
    var _this = this;

    _this['agentId'] = agentId;
  };

  /**
   * Constructs a <code>MediachatinteractionsidremovefromconferenceData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediachatinteractionsidremovefromconferenceData} obj Optional instance to populate.
   * @return {module:model/MediachatinteractionsidremovefromconferenceData} The populated <code>MediachatinteractionsidremovefromconferenceData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentId')) {
        obj['agentId'] = ApiClient.convertToType(data['agentId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique ID of the agent to remove from the conference.
   * @member {String} agentId
   */
  exports.prototype['agentId'] = undefined;



  return exports;
}));


