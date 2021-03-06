import Item from '../containers/Create.vue'

export default function(options) {
  return {
    name: `${options.name}-create-view`,
    preFetch(store) {
      return store.dispatch('FETCH_LIST', options)
    },
    render(h) {
      return h(Item, { props: { options: options } })
    }
  }
}
