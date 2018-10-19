/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.24.2336
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
    root.WorkspaceApi.UcsresponsessearchData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcsresponsessearchData model module.
   * @module model/UcsresponsessearchData
   * @version 9.0.000.24.2336
   */

  /**
   * Constructs a new <code>UcsresponsessearchData</code>.
   * @alias module:model/UcsresponsessearchData
   * @class
   * @param query {String} The query to do the lucene search for standard responses
   */
  var exports = function(query) {
    var _this = this;

    _this['query'] = query;


  };

  /**
   * Constructs a <code>UcsresponsessearchData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcsresponsessearchData} obj Optional instance to populate.
   * @return {module:model/UcsresponsessearchData} The populated <code>UcsresponsessearchData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('returnedAttributes')) {
        obj['returnedAttributes'] = ApiClient.convertToType(data['returnedAttributes'], ['String']);
      }
      if (data.hasOwnProperty('maxResults')) {
        obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The query to do the lucene search for standard responses
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * The list of standard responses attributes to be returned for each standard response in request response
   * @member {Array.<String>} returnedAttributes
   */
  exports.prototype['returnedAttributes'] = undefined;
  /**
   * The maximum number of standard responses to be returned
   * @member {Number} maxResults
   */
  exports.prototype['maxResults'] = undefined;



  return exports;
}));


