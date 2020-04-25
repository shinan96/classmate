var Mock = require('mockjs')
var Random = Mock.Random
var data = Mock.mock({
  'name|1-10': Random.cfirst() + Random.clast()
})



console.log(data);
