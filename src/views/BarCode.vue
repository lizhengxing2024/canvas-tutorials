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
import JsBarcode from "jsbarcode";

const canvasDOMRef = useTemplateRef("canvasDOM");

onMounted(async () => {
  const canvasDOM = canvasDOMRef.value;
  const ctx = canvasDOM?.getContext("2d")!;

  var canvas = document.createElement("canvas");
  JsBarcode(canvas, "123456789", {
    text: "123456789",
  });
  const url = canvas.toDataURL("image/png");
  var img = new Image();
  img.src = url;
  img.onload = function () {
    ctx.drawImage(img, 0, 0, 300, 150);
  };
});
</script>
