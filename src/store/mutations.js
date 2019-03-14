export default {

  // musicList:添加音乐列表
  addMusicList(state, list) {
    state.musicList = list;
  },

  // 添加单曲到末尾
  pushMusic(state, song) {
    const any = (arr, fn = Boolean) => arr.some(fn);
    let isHave = any(state.musicList, x => x.id === song.id);
    if (!isHave) {
      state.musicList.push(song);
    }
    state.musicList.map((e, i) => {
      if (e.id === song.id) {
        state.musicListIndex = i;
      }
    })
  },

  // 添加 audio 元素
  getAudio(state, el) {
    state.audio = el;
  },

  // 歌单索引加 1
  addMusicIndex(state) {
    state.musicListIndex += 1;
    if (state.musicListIndex > state.musicList.length - 1) {
      state.musicListIndex = 0;
    }
  },

  // 歌单索引减 1
  lessMusicIndex(state) {
    state.musicListIndex -= 1;
    if (state.musicListIndex < 0) {
      state.musicListIndex = state.musicList.length - 1;
    }
  },

  // 修改歌单索引
  changeIndex(state, index) {
    state.musicListIndex = index;
  },

  // 删除播放列表中一首音乐
  remodeMusic(state, id) {
    state.musicList.map((e, i) => {
      if (e.id === id) {
        state.musicList.splice(i, 1);
      }
    })
  },

  // 清除播放列表
  clearMusicList(state) {
    state.musicList = [];
  },

  // 改变 endedListener
  changeEndedListener(state, funName) {
    state.endedListener = funName;
  },

  // 修改正在播放音乐的 id
  changePlayingMusicId(state, id) {
    state.playingMusicId = id;
  },

  // 音乐是否在播放状态
  changePlaying(state, boolean) {
    state.playing = boolean;
  },

  // 修改排行榜音乐列表
  changeTopListData(state, data) {
    state.topListData = data;
  },

  // 修改排行榜评论
  changeReview(state, data) {
    state.reviewData = data;
  }
}