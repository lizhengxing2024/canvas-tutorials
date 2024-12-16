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

function measureText(
  ctx: CanvasRenderingContext2D,
  text: string
): {
  width: number;
  height: number;
} {
  const measure = ctx.measureText(text);

  return {
    width: measure.width,
    height: measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent,
  };
}

onMounted(() => {
  const canvasDOM = canvasDOMRef.value;
  const ctx = canvasDOM?.getContext("2d")!;

  const left = "16"; // 初潮年龄
  const top = "10"; // 经期
  const right = "40"; // 末次月经/绝经年龄
  const bottom = "400"; // 周期

  ctx.beginPath();
  ctx.font = "15px 宋体";

  const leftM = measureText(ctx, left);
  const topM = measureText(ctx, top);
  const rightM = measureText(ctx, right);
  const bottomM = measureText(ctx, bottom);

  ctx.textAlign = "left";
  ctx.fillText(left, 0, leftM.height + topM.height);

  ctx.textAlign = "center";
  ctx.fillText(
    top,
    leftM.width + Math.max(topM.width, bottomM.width) / 2,
    topM.height
  );

  ctx.textAlign = "left";
  ctx.fillText(
    right,
    leftM.width + Math.max(topM.width, bottomM.width),
    rightM.height + topM.height
  );

  ctx.textAlign = "center";
  ctx.fillText(
    bottom,
    leftM.width + Math.max(topM.width, bottomM.width) / 2,
    topM.height + Math.max(leftM.height, rightM.height) + bottomM.height
  );

  ctx.moveTo(
    leftM.width,
    topM.height + Math.max(leftM.height, rightM.height) / 2
  );
  ctx.lineTo(
    leftM.width + Math.max(topM.width, bottomM.width),
    topM.height + Math.max(leftM.height, rightM.height) / 2
  );
  ctx.stroke();
});
</script>
