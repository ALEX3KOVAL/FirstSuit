$(function(){
  var cx = document.getElementById("draw__canvas_left_line_js").getContext("2d");
  cx.strokeStyle = "#ff9966";
  cx.lineJoin = "round";
  cx.lineWidth = 2;
  cx.beginPath();
  cx.moveTo(0, 10);
  cx.lineTo(605, 10);
  cx.stroke();
  var cx_rect = document.getElementById("draw__canvas_rect_js").getContext("2d");
  cx_rect.strokeStyle = "#ff9966";
  cx_rect.lineJoin = "round";
  cx_rect.lineWidth = 2;
  cx_rect.strokeRect(1,2,295,125);
  cx_rect.shadowColor = "blue";
  cx_rect.shadowOffsetX = 0;
  cx_rect.shadowOffsetY = 0;
  cx_rect.shadowBlur = 10;
  cx_rect.strokeStyle = "#F00";
  cx_rect.font = "Bold 60pt Helvetica Neue,Helvetica, Arial, sans-serif";
  cx_rect.fillStyle = "#ff8cff";
  cx_rect.fillText("J S", 120, 90, 60);
  var cx_right = document.getElementById("draw__canvas_right_line_js").getContext("2d");
  cx_right.strokeStyle = "#ff9966";
  cx_right.lineJoin = "round";
  cx_right.lineWidth = 2;
  cx_right.beginPath();
  cx_right.moveTo(0, 10);
  cx_right.lineTo(300, 10);
  cx_right.stroke();
})