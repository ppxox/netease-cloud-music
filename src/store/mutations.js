export default {

  // musicList:添加音乐列表
  addMusicList(state, list) {
    state.musicList = list
  },

  // 添加 audio 元素
  getAudio(state, el) {
    state.audio = el
  },

  // 歌单索引加 1
  addMusicIndex(state) {
    state.musicListIndex += 1
    if (state.musicListIndex > state.musicList.length - 1) {
      state.musicListIndex = 0;
    }
  },

  // 歌单索引减 1
  lessMusicIndex(state) {
    state.musicListIndex -= 1
    if (state.musicListIndex < 0) {
      state.musicListIndex = state.musicList.length - 1
    }
  },

  // 修改歌单索引
  changeIndex(state, index) {
    state.musicListIndex = index
  },

  // 删除播放列表中一首音乐
  remodeMusic(state, id) {
    state.musicList.map((e, i) => {
      if (e.id === id) {
        state.musicList.splice(i, 1);
      }
    })
  },

  // 清除 ended 事件
  changeEndedListener(state, funName) {
    state.endedListener = funName
  }
}