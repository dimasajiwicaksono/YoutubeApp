export function buildVideoCategoriesRequest() {
    return buildApiRequest('GET',
      '/youtube/v3/videoCategories',
      {
        'part': 'snippet',
        'regionCode': 'US'
      }, null);
  }
  
