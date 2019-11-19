const theme = {  
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Georgia", serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#99e6ff',
    secondary: 'red',
    accent: 'lightgreen',
    muted: 'darkgreen',
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
      fontSize: 6,
      textAlign: 'center',
    },
    ul: {
      padding: 0,
      marginTop: 0,
    },
    li: {
      listStyleType: 'none',
      fontSize: 2,
      fontFamily: 'body',
    },
    
  }
};

export default theme;