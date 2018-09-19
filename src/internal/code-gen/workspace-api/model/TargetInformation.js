/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.22.2269
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
    root.WorkspaceApi.TargetInformation = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TargetInformation model module.
   * @module model/TargetInformation
   * @version 9.0.000.22.2269
   */

  /**
   * Constructs a new <code>TargetInformation</code>.
   * The target to save.
   * @alias module:model/TargetInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>TargetInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TargetInformation} obj Optional instance to populate.
   * @return {module:model/TargetInformation} The populated <code>TargetInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('emailAddresses')) {
        obj['emailAddresses'] = ApiClient.convertToType(data['emailAddresses'], ['String']);
      }
      if (data.hasOwnProperty('numbers')) {
        obj['numbers'] = ApiClient.convertToType(data['numbers'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The type of target.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The ID of the target.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * If the target is an agent, specify the first name.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * If the target is an agent, specify the last name.
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * The email addresses to save for this personal favorite.
   * @member {Array.<String>} emailAddresses
   */
  exports.prototype['emailAddresses'] = undefined;
  /**
   * The phone numbers to save for this personal favorite.
   * @member {Array.<String>} numbers
   */
  exports.prototype['numbers'] = undefined;



  return exports;
}));


