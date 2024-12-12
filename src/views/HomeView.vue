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

import { Textor } from "@/components/texteditor/TextEditor";

const canvasDOMRef = useTemplateRef("canvasDOM");

var editor = null;

onMounted(() => {
  editor = new Textor.TextEditor(document.getElementById("editor"));
  editor.addEventListener("textchanged", update);
  editor.language = new Textor.JavaScriptLanguage();
  editor.theme = editor.themeManager.get("dark");
  editor.focus();
  editor.text = document.querySelector("#data").textContent;
});
</script>
