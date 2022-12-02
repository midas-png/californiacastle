/**
 * California Castle REST API
 * Rest API created for California Castle website project.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LocationLocationPostRequest model module.
 * @module models/LocationLocationPostRequest
 * @version 1.0.0
 */
class LocationLocationPostRequest {
    /**
     * Constructs a new <code>LocationLocationPostRequest</code>.
     * @alias module:models/LocationLocationPostRequest
     */
    constructor() { 
        
        LocationLocationPostRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LocationLocationPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LocationLocationPostRequest} obj Optional instance to populate.
     * @return {module:models/LocationLocationPostRequest} The populated <code>LocationLocationPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationLocationPostRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], Object);
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], Object);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], Object);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], Object);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], Object);
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocationLocationPostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocationLocationPostRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object} id
 */
LocationLocationPostRequest.prototype['id'] = undefined;

/**
 * @member {Object} category
 */
LocationLocationPostRequest.prototype['category'] = undefined;

/**
 * @member {Object} title
 */
LocationLocationPostRequest.prototype['title'] = undefined;

/**
 * @member {Object} description
 */
LocationLocationPostRequest.prototype['description'] = undefined;

/**
 * @member {Object} price
 */
LocationLocationPostRequest.prototype['price'] = undefined;

/**
 * @member {Object} images
 */
LocationLocationPostRequest.prototype['images'] = undefined;






export default LocationLocationPostRequest;

