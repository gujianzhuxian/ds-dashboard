<!-- 性能数据展示页面：
    （1）总体概要，包括当前数据源数量，关系型数据库数量、非关系型数据库数量。
    （2）对某个数据源的选择，然后下面展示对应数据源的性能数据。
    （3）某数据源的性能数据，如果没选择数据源，就是整体的性能数据，但可以不用管，展示那几项就行，包括CPU、内存、硬盘、带宽占用，并发与吞吐量状况，连接池占用情况。每一项信息用一个图表展示（可以自己先设计）。
 -->
<script lang="ts" setup>
import PageContainer from '@/components/PageContainer.vue';
</script>

<template>
  <PageContainer>
    <div><p style="font-weight: bold;">非关系型数据库性能展示页面</p></div>
    <div
      :style="{
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        padding: '40px',
        backgroundColor: 'var(--color-fill-2)',
      }"
    >
      <a-card :style="{ width: '360px' }" title="关系型数据库" :bordered="false">
        <template #extra>
          <a-link><router-link to="/performance/performance_demonstration/">进入</router-link></a-link>
        </template>
        <p>First databases of relationship type</p>
      </a-card>
      <a-card
        :style="{ width: '360px', marginLeft: '24px' }"
        title="关系型数据库"
        hoverable
        :bordered="false"
      >
        <template #extra>
          <a-link><router-link to="/performance/performance_demonstration/">进入</router-link></a-link>
        </template>
        <p>Second databases of relationship type</p>
      </a-card>
      <a-card
        :style="{ width: '360px', marginLeft: '24px' }"
        title="关系型数据库"
        hoverable
        :bordered="false"
      >
        <template #extra>
          <a-link><router-link to="/performance/performance_demonstration/">进入</router-link></a-link>
        </template>
        <p>Third databases of relationship type</p>
      </a-card>
    </div>
    <div
      :style="{
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        padding: '40px',
        backgroundColor: 'var(--color-fill-2)',
      }"
    >
      <a-card :style="{ width: '360px' }" title="关系型数据库" :bordered="false">
        <template #extra>
          <a-link><router-link to="/performance/performance_demonstration/">进入</router-link></a-link>
        </template>
        <p>Fourth databases of relationship type</p>
      </a-card>
      <a-card
        :style="{ width: '360px', marginLeft: '24px' }"
        title="关系型数据库"
        hoverable
        :bordered="false"
      >
        <template #extra>
          <a-link><router-link to="/performance/performance_demonstration/">进入</router-link></a-link>
        </template>
        <p>Fifth databases of relationship type</p>
      </a-card>
      <a-card
        :style="{ width: '360px', marginLeft: '24px' }"
        title="关系型数据库"
        hoverable
        :bordered="false"
      >
        <template #extra>
          <a-link><router-link to="/performance/performance_demonstration/">进入</router-link></a-link>
        </template>
        <p>Sixth databases of relationship type</p>
      </a-card>
    </div>
  </PageContainer>
</template>
