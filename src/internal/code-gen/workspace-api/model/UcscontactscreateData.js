/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.21.2241
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
    root.WorkspaceApi.UcscontactscreateData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcscontactscreateData model module.
   * @module model/UcscontactscreateData
   * @version 9.0.000.21.2241
   */

  /**
   * Constructs a new <code>UcscontactscreateData</code>.
   * @alias module:model/UcscontactscreateData
   * @class
   * @param properties {Array.<Object>} The list of contact attributes to be added to the contact
   */
  var exports = function(properties) {
    var _this = this;

    _this['properties'] = properties;
  };

  /**
   * Constructs a <code>UcscontactscreateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcscontactscreateData} obj Optional instance to populate.
   * @return {module:model/UcscontactscreateData} The populated <code>UcscontactscreateData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], [Object]);
      }
    }
    return obj;
  }

  /**
   * The list of contact attributes to be added to the contact
   * @member {Array.<Object>} properties
   */
  exports.prototype['properties'] = undefined;



  return exports;
}));


