<script>
import { onMount } from "svelte";

let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let now = new Date();
$: day = weekdays[now.getDay()];
$: date = now.getDate();
$: month = months[now.getMonth()];
$: hours = now.getHours() % 12 || 12;
$: minutes = now.getMinutes();
$: seconds = now.getSeconds();
$: ampm = now.getHours() / 12;

onMount(() => {
  setInterval(() => now = new Date(), 1000);
});
</script>

<span>"{day}
  {date < 10 ? 0 : ""}{date}
  {month}
  {hours < 10 ? 0 : ""}{hours}:{minutes < 10 ? 0 : ""}{minutes}:{
    seconds < 10 ? 0 : ""
  }{seconds}
  {ampm < 1 ? "AM" : "PM"}"</span>
