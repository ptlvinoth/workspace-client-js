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
    define(['ApiClient', 'model/MediamediatypeinteractionsidplaceinqueueData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamediatypeinteractionsidplaceinqueueData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.PlaceInQueueData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamediatypeinteractionsidplaceinqueueData);
  }
}(this, function(ApiClient, MediamediatypeinteractionsidplaceinqueueData) {
  'use strict';




  /**
   * The PlaceInQueueData model module.
   * @module model/PlaceInQueueData
   * @version 9.0.000.23.2279
   */

  /**
   * Constructs a new <code>PlaceInQueueData</code>.
   * @alias module:model/PlaceInQueueData
   * @class
   * @param data {module:model/MediamediatypeinteractionsidplaceinqueueData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>PlaceInQueueData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlaceInQueueData} obj Optional instance to populate.
   * @return {module:model/PlaceInQueueData} The populated <code>PlaceInQueueData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamediatypeinteractionsidplaceinqueueData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediamediatypeinteractionsidplaceinqueueData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


