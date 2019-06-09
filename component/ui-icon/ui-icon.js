// component/base-icon/base-icon.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  externalClasses: ['i-class', 'i-class-text'],
  properties: {
    //图片路径 或是 图标字体
    src: {
      type: String,
      value: ""
    },
    //显示模式 [circle,square]
    mold: {
      type: String,
      value: "circle"
    },
    //显示大小 [mini,small,default,large,bigger]
    size:{
      type:[Number,String],
      value:"small"
    },
    //tag标签显示文本
    count: {
      type: [Number, String],
      value: '0'
    },
    //排列方式
    layout:{
      type:String,
      value:'left'
    },
    //文本简称
    shortName:{
      type:String,
      value:''
    },
    //标题
    title: {
      type: String,
      value: ""
    },
    //简要信息
    tip:{
      type:String,
      value:''
    },
    //辅助信息
    assist:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    type: "",
    fontSize:''
  },
  attached() {
    let data = this.data;
    let src = data.src;
    let shortName = data.shortName;
    let type = 'img';

    if (src) {
      let firseChar = src.charAt(0);

      if (firseChar == "/") {
        src = '' + src;
      } else if (firseChar == "h") {

      } else {
        type = "icon";
      }
    } else if (shortName) {
      type = "text"
      shortName = shortName.charAt(0);
    }

    let size = data.size;
    let fontSize = '';
    if(!(['mini','small','default','large','bigger'].includes(size))){
      fontSize = `font-size:${size}rpx;`;
    }


    this.setData({
      src,
      type,
      shortName,
      fontSize
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
