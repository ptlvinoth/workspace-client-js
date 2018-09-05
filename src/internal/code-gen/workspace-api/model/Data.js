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
    define(['ApiClient', 'model/SupervisorvoiceoperationNameData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SupervisorvoiceoperationNameData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.Data = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.SupervisorvoiceoperationNameData);
  }
}(this, function(ApiClient, SupervisorvoiceoperationNameData) {
  'use strict';




  /**
   * The Data model module.
   * @module model/Data
   * @version 9.0.000.21.2241
   */

  /**
   * Constructs a new <code>Data</code>.
   * @alias module:model/Data
   * @class
   * @param data {module:model/SupervisorvoiceoperationNameData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Data} obj Optional instance to populate.
   * @return {module:model/Data} The populated <code>Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = SupervisorvoiceoperationNameData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SupervisorvoiceoperationNameData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


