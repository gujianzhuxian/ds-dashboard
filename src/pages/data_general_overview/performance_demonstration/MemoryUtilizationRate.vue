<script lang="ts" setup>
//import PageContainer from '@/components/PageContainer.vue';
import { ECharts, EChartsOption, init } from 'echarts';
import { onMounted, ref } from 'vue';
onMounted(() => {
  const chartDom = document.getElementById('memory') as HTMLElement;
  const myChart: ECharts = init(chartDom);
  const option: EChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: '内存使用率',
        type: 'gauge',
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}',
        },
        data: [
          {
            value: 35.2,
            name: '内存使用率',
          },
        ],
        title: {
          show: true,
          offsetCenter: [0, '100%'],
          fontSize: 20,
          fontWeight: 'bold',
          minMargin: 15,
          color: 'black',
        },
      },
    ],
  };
  myChart.setOption(option);
});
</script>

<template>
  <PageContainer>
    <div id="memory"></div>
  </PageContainer>
</template>

<style lang="less">
#memory {
  width: 100%;
  height: 300px;
  margin-top: 10px;
  background-color: white;
}
</style>
