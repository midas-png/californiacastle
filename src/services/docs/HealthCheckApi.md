# CaliforniaCastleRestApi.HealthCheckApi

All URIs are relative to *http://californiacastleapi.onrender.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rootGet**](HealthCheckApi.md#rootGet) | **GET** / | 



## rootGet

> rootGet()



Simple health check

### Example

```javascript
import CaliforniaCastleRestApi from 'california_castle_rest_api';

let apiInstance = new CaliforniaCastleRestApi.HealthCheckApi();
apiInstance.rootGet((error, data, response) => {
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

