<template>
  <div></div>
</template>

<script lang="ts">
/* lang 设置为 ts */

// import Draggable from 'vuedraggable' /* 引入插件 */
// import { Component, Prop, Vue,Watch } from 'vue-property-decorator' /* 引入 vue-property-decorator 模块，使用其自带的一些构建组件的模块 */
// import { DemoModule } from '@/store/modules/demo' /* 引入 store 模块的一些 modules */
// import { DemoInterFace } from '@/api/types' // 引入类型声明
// import 'codemirror/addon/lint/lint.css' // 引入css

// HACK: have to use script-loader to load jsonlint
/* eslint-disable import/no-webpack-loader-syntax */
// require('script-loader!jsonlint')

/* 声明组件 */
// @Component({
//   name: 'demoComponent',
//   components: {
//     Draggable
//   }
// })

/* 导出组件 */
// export default class extends Vue {
  /* 声明 prop 变量 */
  /* required 需要检验 必填 */
  /* default 默认值 */
  /* private 声明变量 */
  /* !: 必填 */ // todo: what does it mean
  /* ?: 非必填 */ // todo: what does it mean
  // @Prop({ required: true }) private id!: number
  // @Prop({ required: true }) private value!: string
  // @Prop({ default: true }) private isTrue!: boolean
  // @Prop({ default: () => null }) private data1!: object
  // @Prop({ default: () => [] }) private data2!: any[]
  // @Prop({ default: () => [] }) private data2!: DemoInterFace[] // todo: what does it mean
  // @Prop({ default: () => {
  //   return {
  //     id: 0
  //   }
  // @Prop({ default: 0 }) private min!: number | Date

  // } }) private data2!: object

  /* 声明 data 变量 */
  // private data1: string = '1'
  // private data2: number = 1
  // private data3: number[] = [1, 2]
  // private data4: { [key: string]: string | number } = { a: this.data1, b: this.data2 }
  // private data5 = true
  // private data6?: number

  /* 声明 computed 变量 */
  /* 获取变量值 */
  // get computedData() {
  //   return this.data1
  // }

  /* 设置变量值 */
  // set computedData(val) {
  //   this.data1 = val
  // }

  // get demoModuleData() {
  //   return DemoModule.data1
  // }

  /* 声明 methods 方法 */
  /* private */
  /* public */
  // private getData(num: number | string) {
  //   console.log(`data${num}`, this['data' + num])
  //   return this['data' + num]
  // }

  // private getData2(v: DemoInterFace) {
  //   console.log(`data${num}`, v)
  // }

  // private setData(val: number | string) {
  //   this.$emit('set-data', val)
  // }

  // private handleFocus(event: FocusEvent) {
  //   this.focus = true
  //   this.$emit('focus', event)
  // }

  // private handleBlur(event: FocusEvent) {
  //   this.focus = false
  //   this.$emit('blur', event)
  //   if (this.$parent.$options.name === 'ElFormItem') {
  //     if (this.validateEvent) {
  //       // See https://github.com/ElemeFE/element/blob/dev/packages/form/src/form-item.vue#L292
  //       // eslint-disable-next-line vue/custom-event-name-casing
  //       this.$parent.$emit('el.form.blur', [this.valueCopy])
  //     }
  //   }
  // }

  // public setValue(value: string) {
  //   if (this.jsonEditor) {
  //     this.jsonEditor.setValue(value)
  //   }
  // }

  // handleSizeChange(value: number) {
  //   this.$emit('pagination', { page: this.currentPage, limit: value })
  //   if (this.autoScroll) {
  //     scrollTo(0, 800)
  //   }
  // }

  /* 声明 created 声明周期函数 */
  // created() {
  //   console.log('created')
  // }

  /* 声明 mounted 声明周期函数 */
  // mounted() {
  //   console.log('mounted')
  // }

  /* 声明 beforeDestroy 声明周期函数 */
  // beforeDestroy() {
  //   console.log('beforeDestroy')
  // }

  /* 声明 watch */
  // @Watch('$route')
  // private onRouteChange(route: Route) {
  //   console.log('route', route)
  // }

  // @Watch('lang')
  // private onLangChange() {
  //   this.searchPool = this.generateRoutes(this.routes)
  // }

  // @Watch('value')
  // private onValueChange(value: string, oldValue: string) {
  //   if (this.markdownEditor) {
  //     if (value !== oldValue && value !== this.markdownEditor.getValue()) {
  //       this.markdownEditor.setValue(value)
  //     }
  //   }
  // }

  // @Watch('defaultTheme', { immediate: true })
  // private onDefaultThemeChange(value: string) {
  //   this.theme = value
  // }
// }
</script>
