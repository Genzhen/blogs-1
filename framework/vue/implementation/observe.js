function observe(data){
  if(!data || typeof data !== 'object'){
    console.error('The data format error!');
    return;
  }
  Object.keys(data).forEach(function(k){
    var value = data[k];
    if(typeof value === 'object')
      observe(value);
    Object.defineProperty(data, k, {
      enumerable: true,     // ��ö��
      configurable: false,  // ������define
      get: function() {
        return value;
      },
      set: function(newVal) {
        console.log('Data has changed, new value: ' + newVal);
        value = newVal;
      }
    });
  });
}
