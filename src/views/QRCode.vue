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
import QRCode from "qrcode";

const canvasDOMRef = useTemplateRef("canvasDOM");

onMounted(async () => {
  const canvasDOM = canvasDOMRef.value;
  const ctx = canvasDOM?.getContext("2d")!;

  const url = await QRCode.toDataURL("http://192.168.1.1:8080/abc?xyz=123&persionid=123");

  var img = new Image();
  img.src = url;
  img.onload = function () {
    ctx.drawImage(img, 0, 0, 100, 100);
  };
});
</script>
