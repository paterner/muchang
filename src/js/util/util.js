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