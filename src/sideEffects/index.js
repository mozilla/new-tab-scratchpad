export const setBrowserTheme = (args) => {

  const { type, primary, brightText } = args;

  if (type === 'default') {
    browser.theme.reset();
  }

  if (type === 'custom') {
    const theme = {
      colors: {
        frame: primary
      }
    }

    browser.theme.update({...theme})
  }
}

export const storeColorWay = (index) => {
  browser.storage.local.set({colorWayIndex: index});
}

export const getColorWay = () => {

}