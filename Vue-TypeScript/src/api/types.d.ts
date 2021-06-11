/**
 * 定义对象数据类型接口，对一个对象进行描述
 */

export interface DemoInterFace {
  id: number,
  title: string,
  timestamp: number | string,
  platforms: string[]
  isDisabled: boolean,
  data: any[]
}
