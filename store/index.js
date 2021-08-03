export const state = () => ({
  locales: ['en-US', 'zh-CN'],
  locale: 'zh-CN'
  // locale: 'en-US'
})

export const mutations = {
  // 此处为设置locale
  SET_LANG(state, locale1) {
      if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale1
      }
  },
  changeLang(state, langs){
    state.locale = langs;
  }
}