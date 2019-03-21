<template>
    <div>
        <div class="row">
            <div class="col-sm-12">
                <div class="title">{{ (sections[type]) ? sections[type].name : "" }}</div>
                <p class="title-description">{{ (sections[type]) ? sections[type].description : "" }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Section",
    props: ["sections", "type"],
    data() {
        return {

        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/css/custom.scss';


</style>
