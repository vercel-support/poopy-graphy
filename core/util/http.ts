export function getHeaders() {
  return {
    headers: {
      accept: 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'sec-gpc': '1',
      'X-API-KEY': 'BQYvhnv04csZHaprIBZNwtpRiDIwEIW9',
      cookie:
        'mysession=eyJhY3RpdmUiOm51bGx9; mysession.sig=CERRPudKqE7Ttq402aGp3qRHs4A',
    },
    referrer: 'https://graphql.bitquery.io/ide',
    referrerPolicy: 'strict-origin-when-cross-origin' as ReferrerPolicy,
    mode: 'cors' as RequestMode,
  }
}