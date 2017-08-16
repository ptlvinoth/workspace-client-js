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
    define(['ApiClient', 'model/UcsidentifycontactData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UcsidentifycontactData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.IdentifyContactData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.UcsidentifycontactData);
  }
}(this, function(ApiClient, UcsidentifycontactData) {
  'use strict';




  /**
   * The IdentifyContactData model module.
   * @module model/IdentifyContactData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IdentifyContactData</code>.
   * @alias module:model/IdentifyContactData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>IdentifyContactData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdentifyContactData} obj Optional instance to populate.
   * @return {module:model/IdentifyContactData} The populated <code>IdentifyContactData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UcsidentifycontactData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UcsidentifycontactData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


