var isObj = require('isobject')

module.exports = function(root, key, value){
  var PATH

  /**
   * @param {string} base Keypath so far
   * @param {string} str Key to add to path
   */
  function join(base, str){
    return base.match(/./) ? base+'.'+str : str
  }

  /**
   * @param {string} path Keypath so far, passed recursively
   * @param {object} obj Context we loop over
   */
  function traverseDeep(path, obj){ // meta, meta{} 
    Object.keys(obj).forEach(function(k){
      if (isObj(obj[k])){
        traverseDeep(join(path, k), obj[k])
      }
      else if (k === key && Object.is(obj[k], value)){
        PATH = join(path, k) 
      }
    })
  }

  /**
   * @param {object} obj Root object to start traversal
   */
  function traverse(obj){
    var path = ''

    Object.keys(obj).forEach(function(k){
      if (isObj(obj[k])){
        traverseDeep(k, obj[k])
      }
      else if (k === key && Object.is(obj[k], value)){
        PATH = join(path, k)
      }
    });
  };

  traverse(root)

  return PATH 
}
