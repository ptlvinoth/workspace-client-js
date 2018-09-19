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
    define(['ApiClient', 'model/UcsresponsescategoriesgetrootData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UcsresponsescategoriesgetrootData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.GetRootCategoriesData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.UcsresponsescategoriesgetrootData);
  }
}(this, function(ApiClient, UcsresponsescategoriesgetrootData) {
  'use strict';




  /**
   * The GetRootCategoriesData model module.
   * @module model/GetRootCategoriesData
   * @version 9.0.000.22.2269
   */

  /**
   * Constructs a new <code>GetRootCategoriesData</code>.
   * @alias module:model/GetRootCategoriesData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GetRootCategoriesData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRootCategoriesData} obj Optional instance to populate.
   * @return {module:model/GetRootCategoriesData} The populated <code>GetRootCategoriesData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UcsresponsescategoriesgetrootData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UcsresponsescategoriesgetrootData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


