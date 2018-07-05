/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
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
    root.WorkspaceApi.Statistic = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Statistic model module.
   * @module model/Statistic
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Statistic</code>.
   * @alias module:model/Statistic
   * @class
   * @param objectId {String} The ID of the object to get statistics for.
   * @param objectType {String} The type of object to get statistics for.
   * @param name {String} The name of the statistic.
   */
  var exports = function(objectId, objectType, name) {
    var _this = this;

    _this['objectId'] = objectId;
    _this['objectType'] = objectType;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>Statistic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Statistic} obj Optional instance to populate.
   * @return {module:model/Statistic} The populated <code>Statistic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('objectId')) {
        obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
      }
      if (data.hasOwnProperty('objectType')) {
        obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the object to get statistics for.
   * @member {String} objectId
   */
  exports.prototype['objectId'] = undefined;
  /**
   * The type of object to get statistics for.
   * @member {String} objectType
   */
  exports.prototype['objectType'] = undefined;
  /**
   * The name of the statistic.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


