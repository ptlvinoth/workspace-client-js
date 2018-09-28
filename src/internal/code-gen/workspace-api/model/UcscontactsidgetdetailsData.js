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
    root.WorkspaceApi.UcscontactsidgetdetailsData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcscontactsidgetdetailsData model module.
   * @module model/UcscontactsidgetdetailsData
   * @version 9.0.000.23.2279
   */

  /**
   * Constructs a new <code>UcscontactsidgetdetailsData</code>.
   * @alias module:model/UcscontactsidgetdetailsData
   * @class
   * @param returnedAttributes {Array.<String>} The list of contact attributes to be returned for each contact in response
   */
  var exports = function(returnedAttributes) {
    var _this = this;

    _this['returnedAttributes'] = returnedAttributes;
  };

  /**
   * Constructs a <code>UcscontactsidgetdetailsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcscontactsidgetdetailsData} obj Optional instance to populate.
   * @return {module:model/UcscontactsidgetdetailsData} The populated <code>UcscontactsidgetdetailsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('returnedAttributes')) {
        obj['returnedAttributes'] = ApiClient.convertToType(data['returnedAttributes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The list of contact attributes to be returned for each contact in response
   * @member {Array.<String>} returnedAttributes
   */
  exports.prototype['returnedAttributes'] = undefined;



  return exports;
}));


