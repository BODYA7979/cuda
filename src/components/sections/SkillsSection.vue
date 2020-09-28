<template>
    <b-row class="skills">
        <b-col
            v-for="(skill, index) in skills"
            :key="'skill--' + index"
            cols="12"
            sm="6"
            md="3"
            class="skill"
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
    .skills {
        .skill {
            &:not(:last-child) {
                @media (max-width: 768px) {
                    margin-bottom: 100px;
                }
            }
            .vue-easy-pie-chart {
                color: #3c4761;
                font-weight: 300;
                vertical-align: middle;
            }
            &--percent {
                &__number {
                    font-size: 50px;
                }
                &__sign {
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
                text-transform: uppercase;
            }
        }
    }
</style>
