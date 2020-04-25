export const random = (Min = 0, Max = 10) => {
  var Range = Max - Min
  var Rand = Math.random()
  var num = Min + Math.round(Rand * Range) //四舍五入
  return num
}
