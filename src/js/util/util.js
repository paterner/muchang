export const request = function(option) {
  $.ajax({
    type: option.type || 'get',
    url: option.url || '',
    data: option.data || '',
    dataType: option.dataType || 'json',
    success: function(res) {
      option.successCb(res);
    },
    error: function(xhr) {
      option.errorCb(xhr);
    }
  })
}

export const getQuery = function() {
  let url = location.search
      , theRequest = {}
      , strs = []; 
  if(url.indexOf("?") != -1) { 
    url.substr(1).split("&").forEach((str) => {
      theRequest[str.split("=")[0]] = unescape(str.split("=")[1]); 
    });
  } 
  return theRequest;
}