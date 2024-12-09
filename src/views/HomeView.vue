<template>
  <div style="border: 1px solid blue">
    <canvas ref="canvasDOM" width="400" height="300"></canvas>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from "vue";

const canvasDOMRef = useTemplateRef("canvasDOM");

onMounted(() => {
  const ctx = canvasDOMRef.value!.getContext("2d")!;


  ctx.shadowOffsetX = 6;
  ctx.shadowOffsetY = 6;
  ctx.shadowBlur = 6;
  ctx.shadowColor = "rgba(0,0,255,.8)";

  ctx.font = "80px Times New Roman";
  ctx.strokeStyle = "green";
  ctx.fillStyle = "blue";
  ctx.strokeRect(100, 100, 100, 100);
});
</script>
