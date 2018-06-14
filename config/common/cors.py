# see doc here
# https://github.com/ottoyiu/django-cors-headers/
CORS_ORIGIN_ALLOW_ALL = True
# Custom headers
# CORS_EXPOSE_HEADERS = ()
CORS_ALLOW_HEADERS = (
    'x-requested-with',
    'content-type',
    'accept',
    'origin',
    'authorization',
    'x-csrftoken',
    'user-agent',
    'accept-encoding',
    'user-timezone',
    'Authorization',
    'access-token',
)
CORS_ALLOW_METHODS = (
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
)

CORS_ORIGIN_WHITELIST = (
    'localhost:8000',
    'localhost:8080',
 )

# CORS_EXPOSE_HEADERS = (
#     'Access-Control-Allow-Origin: *',
# )
