const theme = {
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  sizes: [0, 5, 10, 20, 40, 60, 80, 100],
  breakpoints: ['360px', '520px'],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Georgia", serif',
    monospace: 'Menlo, monospace',
  },
  shadows: {
    boxshadow: 'rgba(0, 0, 0, 0.2) 1px 2px 4px 0px;',
    greenglow: '0px 0px 2px 2px rgba(0, 200, 0, 0.5)',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#99e6ff',
    secondary: 'red',
    accent: 'lightgreen',
    muted: 'darkgreen',
    bordercolor: 'gray',
    lightgray: '#ddd',
    lightergray: '#eee',
    darkgray: '#666',
    darkergray: '#333',
    lightgreen: 'green',
    darkred: 'darkred',
  },
  styles: {
    Container: {
      maxWidth: 640,
    },
    h1: {
      fontFamily: 'heading',
      fontSize: [5, 6],
      textAlign: 'center',
    },
    ul: {
      padding: 0,
      marginTop: 0,
    },
    li: {
      listStyleType: 'none',
      fontSize: [1, 2],
      fontFamily: 'body',
    },
  },
};

export default theme;
