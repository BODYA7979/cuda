<template>
    <b-container>
        <b-jumbotron
                header-html="Hi there! We are the new kids on the block<br> and we build awesome websites and mobile apps."
                header-level="5"
                fluid
                text-variant="white"
        >
            <b-button href="/#contact">Work with us</b-button>
        </b-jumbotron>
    </b-container>
</template>

<script>
    export default {
        name: "HeaderContent"
    }
</script>

<style scoped lang="scss">
    .jumbotron {
        background-color: transparent;
        text-align: center;
        padding: 145px 0;
        margin-bottom: 0;
        h1 {
            color: #F7F3EA;
            font-size: 42px;
            line-height: 49px;
            font-weight: 700;
        }
        a {
            background-color: #EB7D4B;
            margin-top: 53px;

            padding: 28.5px 82.5px;
            text-transform: uppercase;

            font-size: 18px;
            font-weight: 600;
            line-height: 26px;

            border-radius: 4px;
            border-bottom: 4px solid #c86a43;
        }
    }
</style>
