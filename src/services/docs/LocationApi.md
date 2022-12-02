# CaliforniaCastleRestApi.LocationApi

All URIs are relative to *https://californiacastleapi.onrender.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationLocationIdDelete**](LocationApi.md#locationLocationIdDelete) | **DELETE** /location/location/{id} | 
[**locationLocationIdGet**](LocationApi.md#locationLocationIdGet) | **GET** /location/location/{id} | 
[**locationLocationIdPatch**](LocationApi.md#locationLocationIdPatch) | **PATCH** /location/location/{id} | 
[**locationLocationPost**](LocationApi.md#locationLocationPost) | **POST** /location/location | 
[**locationLocationsGet**](LocationApi.md#locationLocationsGet) | **GET** /location/locations | 



## locationLocationIdDelete

> locationLocationIdDelete(id)



### Example

```javascript
import CaliforniaCastleRestApi from 'california_castle_rest_api';

let apiInstance = new CaliforniaCastleRestApi.LocationApi();
let id = "id_example"; // String | 
apiInstance.locationLocationIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## locationLocationIdGet

> locationLocationIdGet(id)



### Example

```javascript
import CaliforniaCastleRestApi from 'california_castle_rest_api';

let apiInstance = new CaliforniaCastleRestApi.LocationApi();
let id = "id_example"; // String | 
apiInstance.locationLocationIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## locationLocationIdPatch

> locationLocationIdPatch(id, opts)



### Example

```javascript
import CaliforniaCastleRestApi from 'california_castle_rest_api';

let apiInstance = new CaliforniaCastleRestApi.LocationApi();
let id = "id_example"; // String | 
let opts = {
  'body': new CaliforniaCastleRestApi.LocationLocationIdDeleteRequest() // LocationLocationIdDeleteRequest | 
};
apiInstance.locationLocationIdPatch(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**LocationLocationIdDeleteRequest**](LocationLocationIdDeleteRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## locationLocationPost

> locationLocationPost(opts)



### Example

```javascript
import CaliforniaCastleRestApi from 'california_castle_rest_api';

let apiInstance = new CaliforniaCastleRestApi.LocationApi();
let opts = {
  'body': new CaliforniaCastleRestApi.LocationLocationPostRequest() // LocationLocationPostRequest | 
};
apiInstance.locationLocationPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationLocationPostRequest**](LocationLocationPostRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## locationLocationsGet

> locationLocationsGet()



### Example

```javascript
import CaliforniaCastleRestApi from 'california_castle_rest_api';

let apiInstance = new CaliforniaCastleRestApi.LocationApi();
apiInstance.locationLocationsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

