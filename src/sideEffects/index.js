export const setBrowserTheme = (browserTheme) => {
  const { type, colors  } = browserTheme;
  if (type === 'default') {
    browser.theme.reset();
  }

  if (type === 'custom') {
    browser.theme.update({colors})
  }
}

export const storeColorwayIndex = (index) => {
  browser.storage.local.set({colorwayIndex: index});
}