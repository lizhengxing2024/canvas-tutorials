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

import TextEditor from "@/components/texteditor/TextEditor";
import JavaScriptLanguage from "@/components/JavaScriptLanguage";

const canvasDOMRef = useTemplateRef("canvasDOM");

const code = `
context.lineWidth = 2;
context.strokeStyle = "#bbb";
context.fillStyle = "#999";

for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 4; j++) {
        roundedRect(30 + 60 * i, 40 + 60 * j, 50, 50, 26 - (i * 2));
        if (i % 4== j) {
            context.fill();
        }
        context.stroke();
    }
}

function roundedRect(x, y, width, height, radius) {
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
}
`;

let editor: TextEditor;
onMounted(() => {
  editor = new TextEditor(canvasDOMRef.value!);
  editor.addEventListener("textchanged", update);
  editor.language = new JavaScriptLanguage();
  editor.theme = editor.themeManager.get("dark");
  editor.focus();
  editor.text = code;
});

function update() {
  console.log(editor.text);
}
</script>
