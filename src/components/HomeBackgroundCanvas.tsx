import React from 'react'

type state = {
    width: number,
    height: number,
    prints: string
}

export default class HomeBackgroundCanvas extends React.Component<any, state> {

    canvas: HTMLCanvasElement | null

    constructor(props: any) {
        super(props)
        this.state = {
            width: 1200,
            height: 900,
            prints:
                "<script id=\"vertexShader\" type=\"x-shader/x-vertex\">\n" +
                "  void main() {\n" +
                "    //给内置变量gl_PointSize赋值像素大小\n" +
                "    gl_PointSize=20.0;\n" +
                "    //顶点位置，位于坐标原点\n" +
                "    gl_Position =vec4(0.0,0.0,0.0,1.0);\n" +
                "  }" +
                "</script>" +
                "<script id=\"fragmentShader\" type=\"x-shader/x-fragment\">\n" +
                "  void main() {\n" +
                "    gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n" +
                "  }" +
                "</script>"
        }
        this.glPrint = this.glPrint.bind(this)
        this.canvas = null
    }

    componentWillMount() {
        this.setState({
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }, () => {
            this.glPrint()
        })
    }

    render() {
        return (
            <>
                <canvas ref={(canvas) => {
                    this.canvas = canvas
                }} width={this.state.width} height={this.state.height}/>
                <div dangerouslySetInnerHTML={{__html: this.state.prints}}/>
            </>
        )
    }

    glPrint() {
        if (this.canvas == null)
            return
        let gl = this.canvas.getContext('webgl')
        if (gl == null)
            return
        
    }
}