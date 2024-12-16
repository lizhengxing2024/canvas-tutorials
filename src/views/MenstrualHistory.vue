<template>
  <canvas
    ref="canvasDOM"
    width="600"
    height="600"
    style="border: 1px solid blue"
  ></canvas>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from "vue";

const canvasDOMRef = useTemplateRef("canvasDOM");

onMounted(() => {
  const canvasDOM = canvasDOMRef.value;
  const ctx = canvasDOM?.getContext("2d")!;

  ctx.beginPath();
  ctx.font = "15px/10 宋体";
  ctx.textAlign = "center";

  const measure = ctx.measureText("16");
  const textHeight =
    measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent;
  const textWidth = measure.width;

  ctx.fillText("16", textWidth / 2, textHeight * 2);
  ctx.fillText("16", textWidth * 1.5, textHeight);
  ctx.fillText("16", textWidth * 2.5, textHeight * 2);
  ctx.fillText("16", textWidth * 1.5, textHeight * 3);

  ctx.moveTo(textWidth, textHeight * 1.5);
  ctx.lineTo(textWidth * 2, textHeight * 1.5);

  ctx.stroke();
});
</script>
