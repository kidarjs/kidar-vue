import{d as t}from"./network.20aa3f79.js";import{setTitle as a,omitNum as e}from"./common.d2e9833c.js";import{AXIS_TYPE as i,SERIES_TYPE as o}from"./constant.9d141aba.js";import"./index.c2103e5d.js";import"./echarts.cd8c9dcc.js";var r=t({name:"line",resetOption:(t,r,s)=>({title:a(s),grid:{left:60,right:60,bottom:100},legend:{show:!1},tooltip:{show:!0,trigger:"axis"},yAxis:[{type:i.value,axisLabel:{formatter:e}}],xAxis:[{type:i.category,data:r.map((t=>t.name))}],series:[{id:s.chartId,animationDurationUpdate:1e3,universalTransition:!0,type:o.line,data:r}]})});export{r as default};