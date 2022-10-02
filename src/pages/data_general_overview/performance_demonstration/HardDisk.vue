<script lang="ts" setup>
//import PageContainer from '@/components/PageContainer.vue';
import { ECharts, EChartsOption, init } from 'echarts';
import { onMounted, ref } from 'vue';
onMounted(() => {
  const chartDom = document.getElementById('disk') as HTMLElement;
  const myChart: ECharts = init(chartDom);
  const option: EChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: '硬盘信息',
        type: 'gauge',
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}',
        },
        title: {
          show: true,
          offsetCenter: [0, '100%'],
          fontSize: 20,
          fontWeight: 'bold',
          minMargin: 15,
          color: 'black',
        },
        data: [
          {
            value: 15.5,
            name: '硬盘信息',
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
});
</script>

<template>
  <PageContainer>
    <div id="disk"></div>
  </PageContainer>
</template>

<style lang="less">
#disk {
  width: 100%;
  height: 300px;
  margin-top: 10px;
  background-color: white;
}
</style>
