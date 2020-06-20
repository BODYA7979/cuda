<template>
    <b-row>
        <b-col
            v-for="(skill, index) in skills"
            :key="'skill--' + index"
            cols="12"
            sm="6"
            md="3"
        >
            <VueEasyPieChart
                :percent="skill.percent"
                :line-width="10"
                :scale-color="false"
                :bar-color="skill.color"
                :font-color="'35px'"
            />

            <span>{{ skill.name }}</span>
        </b-col>
    </b-row>
</template>

<script>
    import VueEasyPieChart from 'vue-easy-pie-chart'
    import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'

    export default {
        name: "SkillsSection",
        props: ['skills'],
        components: {
            VueEasyPieChart
        }
    }
</script>

<style scoped lang="scss">

</style>