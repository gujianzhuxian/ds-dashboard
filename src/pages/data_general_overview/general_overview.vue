<!-- eslint-disable prettier/prettier -->
<!-- 性能数据展示页面：
    （1）总体概要，包括当前数据源数量，关系型数据库数量、非关系型数据库数量。
    （2）对某个数据源的选择，然后下面展示对应数据源的性能数据。
    （3）某数据源的性能数据，如果没选择数据源，就是整体的性能数据，但可以不用管，展示那几项就行，包括CPU、内存、硬盘、带宽占用，并发与吞吐量状况，连接池占用情况。每一项信息用一个图表展示（可以自己先设计）。
 -->
<script lang="ts" setup>
import PageContainer from '@/components/PageContainer.vue';
// import general_data from '@/components/data_source/general_data.vue';
// import relational_data from '@/components/data_source/relational_data.vue';
// import non_relational_data from '@/components/data_source/non_relational_data.vue';

import {ECharts, EChartsOption, init} from 'echarts';
import { onMounted,ref } from 'vue';
onMounted(()=>{

const chartDom = document.getElementById('main') as HTMLElement;
const myChart: ECharts = init(chartDom);
const option: EChartsOption={


  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['45%', '65%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 2, name: '关系型数据库' },
        { value: 1, name: '非关系型数据库' },
        { value: 3, name: '数据源' }
      ]
    }
  ]
};
myChart.setOption(option);
})


</script>

<template>
  <PageContainer>
    <!-- <header><h1>数据总体概要界面</h1></header> -->
    <!-- <div id="main"></div> -->
    <div>
      <a-split :style="{
          height: '350px',
          width: '100%',
          minWidth: '500px',
          border: '1px solid var(--color-border)',
        }"
      >
        <template #first>
          <a-typography-paragraph>数据源概况</a-typography-paragraph>
          <div id="main"></div>
        </template>
        <template #second>
          <div>
            <a-split direction="vertical" :style="{height: '350px'}">
              <template #first>
                <a-typography-paragraph><p style="font-weight:bold">关系型数据库数量</p></a-typography-paragraph>
                <div
                  :style="{
                    display: 'flex',
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '20px',
                    backgroundColor: 'var(--color-fill-2)',
                  }"
                >
                  <a-card :style="{ width: '400px' }" title="关系型数据库数量" :bordered="false">
                    <template #extra>
                      <a-link>More</a-link>
                    </template>
                    2个
                    <br />
                    
                  </a-card>
                </div>

              </template>
              <template #second>
                <a-typography-paragraph><p style="font-weight:bold">非关系型数据库数量</p></a-typography-paragraph>
                <div
                  :style="{
                    display: 'flex',
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '20px',
                    backgroundColor: 'var(--color-fill-2)',
                  }"
                >
                  <a-card :style="{ width: '400px' }" title="非关系型数据库数量" :bordered="false">
                    <template #extra>
                      <a-link>More</a-link>
                    </template>
                    1个
                    <br />
                  
                  </a-card>
                </div>
              </template>

            </a-split>
          </div>
        </template>
      </a-split>
    </div>
  </PageContainer>
</template>

<style lang="less">
header{
  height: 4rem;
  width: 100%;
  background-color: rgb(21, 236, 196);
  h1{
    text-align: center;
    line-height: 4rem;
  }
}
#main{
  width:100%;
  height:300px;
  margin-top:10px;
  background-color: white;
}
</style>



