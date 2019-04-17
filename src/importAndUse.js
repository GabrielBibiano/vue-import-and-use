const latestItemFrom = array => array[array.length - 1]

export default {
  created () {
    const { componentsToUse } = this.$options

    if (componentsToUse) {
      componentsToUse.forEach(path => {
        let pathArray = path.split('/');
        let componentName = latestItemFrom(pathArray)
        componentName = componentName.replace(/.vue/gi, '')

        const promise = import('@/components' + path + '.vue')
        this.$options.components[componentName] = () => promise
      })
    }
  }
}
