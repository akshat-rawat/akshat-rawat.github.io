var entries = [ 
  
    { image: 'https://media.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif', width: '60', height: '60', url: '/', target: '_top', tooltip: 'HTML' },
    { image: 'https://media.giphy.com/media/Sr8xDpMwVKOHUWDVRD/giphy.gif', width: '60', height: '60', url: '/', target: '_top', tooltip: 'Bootstrap' },
    { image: 'https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif', width: '60', height: '60', url: '/', target: '_top', tooltip: 'CSS' },
    { image: 'https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif', width: '60', height: '60', url: '/', target: '_top', tooltip: 'JavaScript' },
    { image: 'https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif', width: '60', height: '60', url: '/', target: '_top', tooltip: 'Node.js' },
    { image: 'https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif', width: '60', height: '60', url: '/', target: '_top', tooltip: 'React.js' },
    { image: 'https://media.giphy.com/media/LMt9638dO8dftAjtco/giphy.gif', width: '60', height: '60', url: '/', target: '_top', tooltip: 'Python' },
    { image: 'https://media.giphy.com/media/wgFWLRiND4bkyYR4IN/giphy.gif', width: '90', height: '90', url: '/', target: '_top', tooltip: 'MongoDB' },
    { image: 'https://media.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif', width: '60', height: '60', url: '/', target: '_top', tooltip: 'Git' },
    { image: 'https://media.giphy.com/media/CwTvSiWflgCGKgz5eb/giphy.gif', width: '60', height: '60', url: '/', target: '_top', tooltip: 'GitHub' },
    { image: 'images/sql.png', width: '60', height: '60', url: '/', target: '_top', tooltip: 'SQL' },
    { image: 'https://media.giphy.com/media/UTMsAdkvHGBu2L5NC7/giphy.gif', width: '60', height: '60', url: '/', target: '_top', tooltip: 'Express' },
    { image: 'images/cpp.png', width: '60', height: '60', url: '/', target: '_top', tooltip: 'C++' },
    { image: 'images/jQuery.png', width: '60', height: '60', url: '/', target: '_top', tooltip: 'jQuery' },
    { image: 'images/api.png', width: '60', height: '60', url: '/', target: '_top', tooltip: 'API' },
    { image: 'https://media.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif', width: '60', height: '60', url: '/', target: '_top', tooltip: 'VS Code' }
    
    ];
    
    var settings = {
      //  an array of links
    entries: entries,
    
    // width of tag cloud
    width: "100%",
    
    // height of tag cloud
    height: "100%",
    
    // radius of tag cloud
    radius: "75%",
    
    // min radius of tag cloud
    radiusMin: 75,
    
    // use background draw
    bgDraw: true,
    
    // background color
    bgColor: "var(--xcolor)",
    
    // the behavior of the individual links / Tags
    opacityOver: 1,
    opacityOut: .05,
    opacitySpeed: 6,
    
    // how the content is presented
    fov: 800,
    
    // animation speed
    speed: 1.5,
    
    // font options
    fontFamily: "Arial, sans-serif",
    fontSize: "15",
    fontColor: "var(--ycolor)",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    fontToUpperCase: false,
    
    // tooltip options
    tooltipFontFamily: 'Arial, sans-serif',
    tooltipFontSize: '15',
    tooltipFontColor: 'var(--ycolor)',
    tooltipFontWeight: 'normal',//bold
    tooltipFontStyle: 'normal',//italic 
    tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10
    }
    
    $('#tag-cloud').svg3DTagCloud(settings);
    