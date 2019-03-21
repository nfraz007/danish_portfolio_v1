<template>
  <div id="app">
    <router-view :user="user" :pages="pages" :sections="sections" :page_current="page_current" :socials="socials" :works="works" :educations="educations" />
  </div>
</template>

<script>
import db from "./firebase"

export default {
  name: 'App',
  data() {
    return {
      user: {},
      pages: {},
      sections: {},
      page_current: {},
      settings: [],
      socials: [],
      works: [],
      educations: []
    }
  },
  firestore() {
    return {
      socials: db.collection("socials").where("status", "==", true).orderBy("sort", "asc"),
      works: db.collection("works").where("status", "==", true).orderBy("start_at", "desc"),
      educations: db.collection("educations").where("status", "==", true).orderBy("sort", "asc"),
    }
  },
  mounted() {
    this.getProfile()
    this.getPageCurrent()
    this.getSection()
  },
  methods: {
    getProfile() {
      db.collection("settings").get().then(data => {
        data.forEach(row => {
          this.settings.push(row.data())
        })

        // assign user data
        this.user = this.settings[0]
        this.user.full_name = [this.user.first_name, this.user.last_name].join(" ")
      })
    },
    getPageCurrent() {
      db.collection("pages").where("status", "==", true).where("url", "==", this.$route.path).limit(1).get().then(data => {
        var page_current = [];
        data.forEach(row => {
          page_current.push(row.data())
        })
        this.page_current = page_current[0]
      })
    },
    getSection() {
      db.collection("sections").where("status", "==", true).orderBy("sort", "asc").get().then(data => {
        var pages = {};
        var sections = {};
        data.forEach(row => {
          var row_data = row.data();
          sections[row_data.constant] = row_data;
          if(row_data.type == "page") pages[row_data.constant] = row_data
        })
        this.pages = pages;
        this.sections = sections;
      })
    }
  }
}
</script>

<style scoped>

</style>
