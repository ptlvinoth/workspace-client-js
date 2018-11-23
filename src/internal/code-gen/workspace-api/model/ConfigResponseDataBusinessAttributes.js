/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.27.2423
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
    define(['ApiClient', 'model/ConfigResponseDataValues', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConfigResponseDataValues'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ConfigResponseDataBusinessAttributes = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ConfigResponseDataValues, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, ConfigResponseDataValues, Kvpair) {
  'use strict';




  /**
   * The ConfigResponseDataBusinessAttributes model module.
   * @module model/ConfigResponseDataBusinessAttributes
   * @version 9.0.000.27.2423
   */

  /**
   * Constructs a new <code>ConfigResponseDataBusinessAttributes</code>.
   * @alias module:model/ConfigResponseDataBusinessAttributes
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ConfigResponseDataBusinessAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigResponseDataBusinessAttributes} obj Optional instance to populate.
   * @return {module:model/ConfigResponseDataBusinessAttributes} The populated <code>ConfigResponseDataBusinessAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], [ConfigResponseDataValues]);
      }
      if (data.hasOwnProperty('userProperties')) {
        obj['userProperties'] = ApiClient.convertToType(data['userProperties'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/ConfigResponseDataValues>} values
   */
  exports.prototype['values'] = undefined;
  /**
   * @member {Array.<module:model/Kvpair>} userProperties
   */
  exports.prototype['userProperties'] = undefined;



  return exports;
}));


