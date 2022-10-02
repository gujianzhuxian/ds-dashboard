<script lang="ts" setup>
//import PageContainer from '@/components/PageContainer.vue';
import { ECharts, EChartsOption, init } from 'echarts';
import { onMounted, ref } from 'vue';
onMounted(() => {
  const chartDom = document.getElementById('broadBand') as HTMLElement;
  const myChart: ECharts = init(chartDom);
  const option: EChartsOption = {
    title: {
      show: true,
      text: '带宽占用实时检测',
      left: 'center',

      textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: [
        '21:36:05',
        '21:36:06',
        '21:36:07',
        '21:36:08',
        '21:36:09',
        '21:36:09',
        '21:36:09',
        '21:36:10',
        '21:36:11',
        '21:36:12',
      ],
    },
    yAxis: {
      type: 'value',
      nameLocation: 'end',
      max: 100,
      min: 0,
    },
    series: [
      {
        data: [89, 87, 79, 60, 65, 72, 60, 61, 65, 67],
        type: 'line',
      },
    ],
  };
  myChart.setOption(option);
});
</script>

<template>
  <PageContainer>
    <div id="broadBand"></div>
  </PageContainer>
</template>

<style lang="less">
#broadBand {
  width: 100%;
  height: 300px;
  margin-top: 10px;
  background-color: white;
}
</style>
