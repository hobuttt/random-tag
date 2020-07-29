export const Pagination = {
  data: () => ({
    page: 1,
    length: 0,
    perPage: 10
  }),
  computed: {
    // total () {
    //   return this.$store.getters.getTotalByKey(this.$options.name) // Подобное решение под вопросом.;
    // }
  },
  created () {
    if (this.total) {
      this.calculateLength()
    }
  },
  beforeDestroy () {
    this.page = 1
    this.length = 0
    this.perPage = 10
  },
  methods: {
    calculateLength () {
      this.length = Math.ceil(this.total / this.perPage)
    }
  },
  watch: {
    total () {
      this.calculateLength()
    },
    page () {
      this.$emit('paginationChange')
    },
    perPage () {
      this.$emit('paginationChange')
    }
  }
}
