<template>
  <div>
    <Toggle v-model="value"
        v-bind="darkMode"
        :classes="{
        container: 'inline-block',
        toggle: 'flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
        toggleOn: 'bg-green-500 border-green-500 justify-start text-white',
        toggleOff: 'bg-gray-200 border-gray-200 justify-end text-gray-700',
        toggleOnDisabled: 'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
        toggleOffDisabled: 'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
        handle: 'inline-block bg-white w-5 h-5 top-0 rounded-full absolute transition-all',
        handleOn: 'left-full transform -translate-x-full',
        handleOff: 'left-0',
        handleOnDisabled: 'bg-gray-100 left-full transform -translate-x-full',
        handleOffDisabled: 'bg-gray-100 left-0',
        label: 'text-center w-8 border-box whitespace-nowrap select-none',
        }" />
  </div>
</template>

<script>
  import Toggle from '@vueform/toggle'

  export default {
    components: {
      Toggle,
    },
    data() {
      return {
        value: true
      }
    }
  }
</script>

<style src="@vueform/toggle/themes/default.css"></style>