const latestItemFrom = array => array[array.length - 1]

export default {
  created () {
    const { importAndUse } = this.$options

    if (importAndUse) {
      importAndUse.forEach(path => {
        let pathArray = path.split('/');
        let componentName = latestItemFrom(pathArray)
        componentName = componentName.replace(/.vue/gi, '')
        
        path = path[0] !== '/' ? '/' + path : path

        const promise = import('@/components' + path + '.vue')
        this.$options.components[componentName] = () => promise
      })
    }
  }
}
