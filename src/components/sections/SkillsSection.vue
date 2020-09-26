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
                :line-width="13"
                :scale-color="false"
                :size="160"
                :bar-color="skill.color"
            >
                <span class="skill--percent__number">{{ skill.percent }}</span>
                <span class="skill--percent__sign">%</span>
            </VueEasyPieChart>

            <span class="skill--name">{{ skill.name }}</span>
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
    .row {
        .vue-easy-pie-chart {
            color: #3c4761;
            font-weight: 300;
            vertical-align: middle;
        }
        .skill {
            &--percent {
                &__number {
                    font-size: 50px;
                }
                &_sign {
                    font-size: 32px;
                }
            }
            &--name {
                margin-top: 30px;
                display: block;
                text-align: center;
                font-size: 24px;
                line-height: 18px;
                color: #3c4761;
                font-weight: 700;
            }
        }
    }
</style>
