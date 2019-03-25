<template>
  <div id="app">
    <router-view :user="user" :pages="pages" :sections="sections" :page_current="page_current" :socials="socials" :counter="counter" :skills="skills" :works="works" :projects="projects" :educations="educations" />
  </div>
</template>

<script>
import db from "./firebase";
import * as moment from 'moment';

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
      skills: [],
      works: [],
      projects: [],
      educations: []
    }
  },
  firestore() {
    return {
      socials: db.collection("socials").where("status", "==", true).orderBy("sort", "asc"),
      skills: db.collection("skills").where("status", "==", true).orderBy("sort", "asc"),
      works: db.collection("works").where("status", "==", true).orderBy("start_at", "desc"),
      projects: db.collection("projects").where("status", "==", true).orderBy("start_at", "desc"),
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
      db.collection("sections").where("status", "==", true).where("type", "==", "page").where("url", "==", this.$route.path).limit(1).get().then(data => {
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
  },
  computed: {
    counter() {
      var experiences = 0;
      var works = this.works.map(function(work){
        var now = moment();
        var start_at = (work.start_at) ? moment(work.start_at) : now;
        var end_at = (work.end_at) ? moment(work.end_at) : now;
        var diff = end_at.diff(start_at, "years", true)
        experiences += diff
        return diff
      });
      var projects = this.projects.length;
      var certifications = 5;
      var achievements = 3;
      
      return {
        experiences: Math.round(experiences*10)/10,
        projects: projects,
        certifications: certifications,
        achievements: achievements
      }
    },
  }
}
</script>

<style scoped>

</style>
