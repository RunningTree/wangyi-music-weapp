// component/tag/tag.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:['i-class','i-class-text'],
  options:{
    multipleSlots: true
  },
  properties: {
    //圆点
    dot:{
      type:Boolean,
      value:true
    },
    //显示文本
    value:{
      type:[Number,String],
      value:0
    },
    //最大值
    max:{
      type:[Number,String],
      value:99
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
  
  },
  attached(){
    let data = this.data;
    let value =parseInt(data.value);
    let max = parseInt(data.max);

    if(value&&max&&value>max){
      this.setData({
        value:max+'+'
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick:function(){
      this.tirgge
    }
  }
})
