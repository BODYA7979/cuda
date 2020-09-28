<template>
    <div class="footer--wrapper">
        <b-container class="footer--inner">
            <ul>
                <li v-for="(link, index) in links" :key="'footer--link--' + index">
                    <a :href="link.url">{{ link.name }}</a>
                </li>
            </ul>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "FooterContent",
        props: ['links']
    }
</script>

<style scoped lang="scss">
    .footer--wrapper {
        background-color: #344b8e;
        .footer--inner {
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
                text-align: center;
                li {
                    @media (max-width: 768px) {
                        width: 100%;
                    }
                    display: inline-block;
                    a {
                        display: block;
                        font-size: 24px;
                        line-height: 30px;
                        color: #ffffff;
                        font-weight: 600;
                        text-align: center;
                        padding: 27.5px 46px;
                        &:hover, &:active {
                            text-decoration: none;
                            color: #30bae7;
                        }
                    }
                }
            }
        }
    }
</style>
