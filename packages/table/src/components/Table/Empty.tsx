import { memo } from 'react'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import { EmptyProps } from './types'
import './index.less'

function Empty({ text = '暂无数据', fixedEmpty = true }: EmptyProps) {
  return (
    <View className={classNames('taro-table-empty', { ['taro-table-empty-sticky']: fixedEmpty })}>
      <Text>{text}</Text>
    </View>
  )
}

export default memo(Empty)
