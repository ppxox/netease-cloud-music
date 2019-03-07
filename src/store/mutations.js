export default {
  addMusicList(state, list) {
    state.musicList = list
  },
  getAudio(state, el) {
    state.audio = el
  },
  addMusicIndex(state) {
    state.musicListIndex += 1
    if (state.musicListIndex > state.musicList.length - 1) {
      state.musicListIndex = 0;
    }
  },
  lessMusicIndex(state) {
    state.musicListIndex -= 1
    if (state.musicListIndex < 0) {
      state.musicListIndex = state.musicList.length - 1
    }
  }
}