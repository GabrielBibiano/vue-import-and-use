# vue-import-and-use
A solution to simplify import and use of Vue.js components

## Instalation
```sh
$ npm install --save vue-import-and-use
```

## Without vue-import-and-use


```HTML
<script>
// Import components
import A from '@/components/A'
import B from '@/components/aDir/B'
import C from '@/components/otherDir/anotherDir/C'
import D from '@/components/D'
import E from '@/components/E'
// ...

export default {
  name: 'my-component',
  // Uses imported components
  components: {
    A,
    B,
    C,
    D,
    E
  }
}
</script>
```

## With vue-import-and-use


```HTML
<script>
import importAndUse from 'vue-import-and-use'

export default {
  mixins: [importAndUse],
  name: 'my-component',
  // '/' is not required but is supported
  importAndUse: [
    'A', 
    'aDir/B', 
    '/otherDir/anotherDir/C', 
    'D', 
    'E'
  ]
}
</script>
```

### Limitation
 - `@` alias is required
 - all components must be in `@/components/`