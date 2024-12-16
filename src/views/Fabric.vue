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

  const text = new fabric.IText(
    `this is
multi-line
text
aligned right!`,
    {
      left: 100,
      top: 100,
      fontFamily: "Comic Sans",
      fontSize: 40,
      fontWeight: "bold",
      underline: true,
      lineHeight: 1.5,
      textBackgroundColor: "rgb(0,200,0)",

      styles: {
        0: {
          1: {
            fontSize: 24,
          },
        },
      },
    }
  );

  // 将文本添加到画布
  canvas.add(text);

  text.enterEditing();
});
</script>
