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
    root.WorkspaceApi.UcscontactsidgethistoryData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcscontactsidgethistoryData model module.
   * @module model/UcscontactsidgethistoryData
   * @version 9.0.000.23.2279
   */

  /**
   * Constructs a new <code>UcscontactsidgethistoryData</code>.
   * @alias module:model/UcscontactsidgethistoryData
   * @class
   * @param returnedAttributes {Array.<String>} The list of custom contact attributes to be returned for each interaction of the contact
   */
  var exports = function(returnedAttributes) {
    var _this = this;

    _this['returnedAttributes'] = returnedAttributes;


  };

  /**
   * Constructs a <code>UcscontactsidgethistoryData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcscontactsidgethistoryData} obj Optional instance to populate.
   * @return {module:model/UcscontactsidgethistoryData} The populated <code>UcscontactsidgethistoryData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('returnedAttributes')) {
        obj['returnedAttributes'] = ApiClient.convertToType(data['returnedAttributes'], ['String']);
      }
      if (data.hasOwnProperty('fromDate')) {
        obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'String');
      }
      if (data.hasOwnProperty('toDate')) {
        obj['toDate'] = ApiClient.convertToType(data['toDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * The list of custom contact attributes to be returned for each interaction of the contact
   * @member {Array.<String>} returnedAttributes
   */
  exports.prototype['returnedAttributes'] = undefined;
  /**
   * The date from which the interactions should be retrieved (UCS format)
   * @member {String} fromDate
   */
  exports.prototype['fromDate'] = undefined;
  /**
   * The date to which the interactions should be retrieved (UCS format)
   * @member {String} toDate
   */
  exports.prototype['toDate'] = undefined;



  return exports;
}));


