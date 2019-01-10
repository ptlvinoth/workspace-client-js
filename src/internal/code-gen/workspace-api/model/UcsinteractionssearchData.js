/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.31.2540
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
    root.WorkspaceApi.UcsinteractionssearchData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcsinteractionssearchData model module.
   * @module model/UcsinteractionssearchData
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>UcsinteractionssearchData</code>.
   * @alias module:model/UcsinteractionssearchData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UcsinteractionssearchData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcsinteractionssearchData} obj Optional instance to populate.
   * @return {module:model/UcsinteractionssearchData} The populated <code>UcsinteractionssearchData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('maxResults')) {
        obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], ['String']);
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('returnedAttributes')) {
        obj['returnedAttributes'] = ApiClient.convertToType(data['returnedAttributes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The maximum number of interactions to be returned
   * @member {Number} maxResults
   */
  exports.prototype['maxResults'] = undefined;
  /**
   * The list of agent username for which the search refers to.
   * @member {Array.<String>} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * The query to do the lucene search for interactions
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * The list of interaction attributes to be returned for each interaction in response
   * @member {Array.<String>} returnedAttributes
   */
  exports.prototype['returnedAttributes'] = undefined;



  return exports;
}));

