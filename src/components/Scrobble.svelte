<script>
import { onMount } from "svelte";
import { scale } from "svelte/transition";

let artist_name, artist_url, track_name, track_url, loved;

const last_scrobble = async () => {
  const username = "aokiare";
  const api_key = import.meta.env.PUBLIC_LASTFM_API_KEY;

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${api_key}&format=json&limit=1&extended=1`,
  );

  const data = await res.json();
  const track = data.recenttracks.track[0];

  track_name = track.name;
  track_url = track.url;
  artist_name = track.artist?.name;
  artist_url = track.artist?.url;
  loved = track.loved;
};

onMount(() => {
  setInterval(() => last_scrobble(), 1000);
});
</script>

{#if track_name !== undefined}
  <span transition:scale={{}}>
    <span class="heart">{loved === "1" ? "♥ " : "♡ "}</span>
    <a href={track_url}>{
      track_name.length > 30
      ? `${track_name.substring(0, 30)}⋯`
      : track_name
    }</a>
    <span>{" / "}</span>
    <a href={artist_url}>{
      artist_name.length > 30
      ? `${artist_name.substring(0, 30)}⋯`
      : artist_name
    }</a>
  </span>
{/if}

<style lang="scss">
@use "@styles/_thorns.scss";

a {
  color: thorns.$fg0;

  &:hover, &:focus {
    text-decoration: unset;
  }
}

.heart {
  color: thorns.$red;
}
</style>
