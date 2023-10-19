import type { Component, VNodeProps } from 'vue'
import { computed, defineComponent, h, mergeProps } from 'vue'
import type { CSSInterpolation } from '@emotion/css'
import { css, cx } from '@emotion/css'
import { useTheme } from '../hooks'
import type { Theme } from './types'

type RenderTypes = Parameters<typeof h>

export const styled = (comp: Component | string, props?: RenderTypes[1]) => {
  return (
    style: TemplateStringsArray | ((theme: Theme) => CSSInterpolation),
    ...args: CSSInterpolation[]
  ) => {
    const theme = useTheme()

    return defineComponent({
      setup(_, { slots }) {
        const cssClass = computed(() =>
          style instanceof Function
            ? css(style(theme?.value))
            : css(style, ...args)
        )

        const className = props?.class
          ? cx(...props.class, cssClass.value)
          : cssClass.value

        const slotsVNodes = slots?.default?.()
        return () =>
          h(
            comp as any,
            mergeProps(props as VNodeProps, { class: className }),
            slotsVNodes
          )
      },
    })
  }
}
