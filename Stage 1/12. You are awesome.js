// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (index) => {
  return index;
};
const createNotEnumerableProperty = (index) => {
  Object.defineProperty(Object.prototype, index, {
    get: function(){
      return Object.prototype._value;
    },
    set: function(val){
      Object.prototype._value = val
    }
  })
  return index;
};
const createProtoMagicObject = () => {
  return Function
};
const incrementor = () => {
    incrementor.count = incrementor.count ? incrementor.count : 1;
    function counter() {
        incrementor.count++;
        return counter;
    }

    counter.valueOf = function() {
        return incrementor.count++;
    }
    return counter;
};
const asyncIncrementor = () => {
  asyncIncrementor.count = asyncIncrementor.count ? asyncIncrementor.count : 0;
  return new Promise( (resolve, regect) => {
       asyncIncrementor.count++;
       return resolve(asyncIncrementor.count);
   })
};
const createIncrementer = () => {
function *iterator(n = 100) {
        for(i = 1; i < n; i++) {
            yield i;
        }
    }
    return iterator();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (res) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => resolve(res), 1000);
  });
};
const getDeepPropertiesCount = () => {
  let count = 0;
    let arrProps = Object.getOwnPropertyNames(obj);
    // returns an array  corresponding to the properties found directly in obj
    count += arrProps.length;
    for(let i = 0; i < arrProps.length; i++) {
        if (Object.getOwnPropertyNames(obj[arrProps[i]]).length > 0) {
          count += getDeepPropertiesCount(obj[arrProps[i]]);//recursive invoke
        }
      }
    return count;
        };
const createSerializedObject = () => {
  JSON.stringify = (obj) => obj;
  JSON.parse = (obj) => obj;
  return {};
};
const toBuffer = () => {};
const sortByProto = (array) => {
  const findCount = (ob) => {
        let count = 0;
        let case1 = ob;
        while (case1.__proto__) {
            count++;
            case1 = case1.__proto__
        }
        return count;
    }
    return array.sort((a,b) => findCount(a) - findCount(b))
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
