// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { useLive2d } from 'vitepress-theme-website'
export default {
    extends: DefaultTheme,
    setup(){
        //看板娘
        useLive2d({
            enable: true,
            model: {
                url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hijiki/hijiki.model.json'
            },
            display: {
                position: 'right',
                width: '135px',
                height: '300px',
                xOffset: '35px',
                yOffset: '5px'
            },
            mobile: {
                show: true
            },
            react: {
                opacity: 0.8
            }
        })
    }
}