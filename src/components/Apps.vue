<script setup lang="ts">

</script>

<template>
    <img alt="bg" src="/img/bg.jpg" height="250" width="100%"/>
    <h1>产品</h1>
    <div class="Show-List">
        <div class="Show-List-Card">
            <img class="Show-List-Card-Icon" src="/img/ASL.png"/>
            <h3>Aurora Star Launcher</h3>
            <div>
                <el-button size="large" type="primary" round><a target="_blank" href="https://asl.thzstudent.top/">官方网站</a></el-button>
                <el-button size="large"  type="primary" plain round><a target="_blank" href="https://github.com/Aurora-Studio-Team/Aurora-Star-Launcher-ASL">GitHub</a></el-button>
                <el-button size="large" disabled round>从Hub获取</el-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h1{
        text-align: center;
    }
    .Show-List{
        width: 100%;
        background-color: #fdfdfdd7;
        text-align: center;
        border-radius: 10px;
        margin-top: 5%;
    }
    .Show-List-Card{
        width: 33%;
        text-align: center;
        display:inline-block;
        bottom: 15px;
    }
    .Show-List-Card-Icon{
        margin-top: 5%;
        height: 55px;
        width: 55px;
    }
</style>