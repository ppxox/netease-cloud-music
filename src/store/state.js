export default {
  // 音乐列表
  musicList: [],
  // 媒体元素
  audio: null,
  // 音乐列表索引
  musicListIndex: 0,
  // ended 事件
  endedListener: null,
  // 正在播放的音乐 id
  playingMusicId: null,
  // 是否在播放
  playing: false,
  // 排行榜数据
  topListData: null,
  // 排行榜评论数据
  reviewData: null,
  // 歌单数据
  playListData: [],
  // 歌单分类
  typeName: '全部',
  // 歌单数量
  totalMusicList: null,
  // 分页器 active 索引
  pagerIndex: 0,
  // 页码
  pageNum: 1,
  // 分页器数组
  pageList: [],
  // 最大页数
  maxNum: null
}