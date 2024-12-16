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
import * as fabric from "fabric";

const canvasDOMRef = useTemplateRef("canvasDOM");

onMounted(async () => {
  const canvasDOM = canvasDOMRef.value!;

  var canvas = new fabric.Canvas(canvasDOM);

  const text = new fabric.FabricText("hello world", { left: 100, top: 100 });

  // 将文本添加到画布
  canvas.add(text);
});
</script>
