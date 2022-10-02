<script lang="ts" setup>
//import PageContainer from '@/components/PageContainer.vue';
import { ECharts, EChartsOption, init } from 'echarts';
import { onMounted, ref } from 'vue';
onMounted(() => {
  const chartDom = document.getElementById('throughPut') as HTMLElement;
  const myChart: ECharts = init(chartDom);
  const option: EChartsOption = {
    title: {
      show: true,
      text: '吞吐状态实时检测',
      //bottom:"left",
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
    },
    series: [
      {
        data: [100, 270, 360, 280, 400, 348, 456, 617, 678, 656],
        type: 'line',
      },
    ],
  };
  myChart.setOption(option);
});
</script>

<template>
  <PageContainer>
    <div id="throughPut"></div>
  </PageContainer>
</template>

<style lang="less">
#throughPut {
  width: 100%;
  height: 300px;
  margin-top: 10px;
  //margin-bottom: 10px;
  background-color: white;
}
</style>
