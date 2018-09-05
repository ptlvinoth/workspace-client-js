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
    root.WorkspaceApi.UcscontactsidupdateData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcscontactsidupdateData model module.
   * @module model/UcscontactsidupdateData
   * @version 9.0.000.21.2241
   */

  /**
   * Constructs a new <code>UcscontactsidupdateData</code>.
   * @alias module:model/UcscontactsidupdateData
   * @class
   * @param addedProperties {Array.<Object>} The list of contact attributes to be added to the contact
   * @param changedProperties {Array.<Object>} The list of contact attributes to be updated for the contact
   * @param deletedProperties {Array.<String>} The list of contact attributes to be deleted for the contact
   */
  var exports = function(addedProperties, changedProperties, deletedProperties) {
    var _this = this;


    _this['addedProperties'] = addedProperties;
    _this['changedProperties'] = changedProperties;
    _this['deletedProperties'] = deletedProperties;
  };

  /**
   * Constructs a <code>UcscontactsidupdateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcscontactsidupdateData} obj Optional instance to populate.
   * @return {module:model/UcscontactsidupdateData} The populated <code>UcscontactsidupdateData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contactId')) {
        obj['contactId'] = ApiClient.convertToType(data['contactId'], 'String');
      }
      if (data.hasOwnProperty('addedProperties')) {
        obj['addedProperties'] = ApiClient.convertToType(data['addedProperties'], [Object]);
      }
      if (data.hasOwnProperty('changedProperties')) {
        obj['changedProperties'] = ApiClient.convertToType(data['changedProperties'], [Object]);
      }
      if (data.hasOwnProperty('deletedProperties')) {
        obj['deletedProperties'] = ApiClient.convertToType(data['deletedProperties'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The id of the contact
   * @member {String} contactId
   */
  exports.prototype['contactId'] = undefined;
  /**
   * The list of contact attributes to be added to the contact
   * @member {Array.<Object>} addedProperties
   */
  exports.prototype['addedProperties'] = undefined;
  /**
   * The list of contact attributes to be updated for the contact
   * @member {Array.<Object>} changedProperties
   */
  exports.prototype['changedProperties'] = undefined;
  /**
   * The list of contact attributes to be deleted for the contact
   * @member {Array.<String>} deletedProperties
   */
  exports.prototype['deletedProperties'] = undefined;



  return exports;
}));


