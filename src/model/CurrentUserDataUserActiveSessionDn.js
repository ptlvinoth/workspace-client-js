/**
 * Workspace API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    root.WorkspaceApi.CurrentUserDataUserActiveSessionDn = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CurrentUserDataUserActiveSessionDn model module.
   * @module model/CurrentUserDataUserActiveSessionDn
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CurrentUserDataUserActiveSessionDn</code>.
   * @alias module:model/CurrentUserDataUserActiveSessionDn
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CurrentUserDataUserActiveSessionDn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrentUserDataUserActiveSessionDn} obj Optional instance to populate.
   * @return {module:model/CurrentUserDataUserActiveSessionDn} The populated <code>CurrentUserDataUserActiveSessionDn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('agentId')) {
        obj['agentId'] = ApiClient.convertToType(data['agentId'], 'String');
      }
      if (data.hasOwnProperty('agentState')) {
        obj['agentState'] = ApiClient.convertToType(data['agentState'], 'String');
      }
      if (data.hasOwnProperty('agentWorkMode')) {
        obj['agentWorkMode'] = ApiClient.convertToType(data['agentWorkMode'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * @member {String} agentId
   */
  exports.prototype['agentId'] = undefined;
  /**
   * @member {String} agentState
   */
  exports.prototype['agentState'] = undefined;
  /**
   * @member {String} agentWorkMode
   */
  exports.prototype['agentWorkMode'] = undefined;



  return exports;
}));

