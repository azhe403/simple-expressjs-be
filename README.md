# Simple ExpressJS Backend

## Note

Every request should be have following HTTP Header

|Name |Value |
|-|-|
| user-id | foo |
| scope | bar|

Or HTTP Respose will be return 401

`{
    'responseCode': 401,
    'responseMessage': 'UNAUTHORIZED'
}`

You can disable this on src\middleware\header.js line 8-16

## Development

`npm start`
