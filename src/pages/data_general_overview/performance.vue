<!-- eslint-disable prettier/prettier -->
<!-- 性能数据展示页面：
    （1）总体概要，包括当前数据源数量，关系型数据库数量、非关系型数据库数量。
    （2）对某个数据源的选择，然后下面展示对应数据源的性能数据。
    （3）某数据源的性能数据，如果没选择数据源，就是整体的性能数据，但可以不用管，展示那几项就行，包括CPU、内存、硬盘、带宽占用，并发与吞吐量状况，连接池占用情况。每一项信息用一个图表展示（可以自己先设计）。
 -->
<script lang="ts" setup>
import PageContainer from '@/components/PageContainer.vue';
import CPU from '@/pages/data_general_overview/performance_demonstration/CpuUtilizationRate.vue';
import Memory from '@/pages/data_general_overview/performance_demonstration/MemoryUtilizationRate.vue';
import HardDisk from '@/pages/data_general_overview/performance_demonstration/HardDisk.vue';
import BroadBand from '@/pages/data_general_overview/performance_demonstration/BroadBand.vue';
import currency from '@/pages/data_general_overview/performance_demonstration/ConCurrency.vue';
//并发数量实时检测
import throughPut from '@/pages/data_general_overview/performance_demonstration/ThroughPut.vue';
//吞吐量状态实时检测
import connect_pool from '@/pages/data_general_overview/performance_demonstration/connection_pool.vue';
//连接池状态
</script>

<template>
  <PageContainer>
    <div class="cards">
      <div class="cards_item"><CPU /></div>
      <div class="cards_item"><Memory /></div>
      <div class="cards_item"><HardDisk /></div>
      <div class="cards_item"><BroadBand /></div>
      <div class="cards_item"><currency /></div>
      <div class="cards_item"><throughPut /></div>
      <div class="cards_item"><connect_pool /></div>
    </div>
  </PageContainer>
</template>

<style lang="less">
.cards {
    display: flex;
    /* 超出容器宽度自动换行 */
    flex-wrap: wrap;
    margin-left: -8px;
    margin-right: -8px;
}

.cards_item {
    /* 初始化每个卡片的宽度，占据父容器的 1/4 */
    flex-basis: 32%;
    padding-left: 8px;
    padding-right: 8px;
}
</style>



