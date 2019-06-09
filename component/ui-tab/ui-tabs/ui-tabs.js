// component/ui-tab/ui-tabs/ui-tabs.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    current:{
      type:Number,
      value:1
    },
    color:{
      type:String,
      value:''
    },
    fixed:{
      type:Boolean,
      value:false
    },
    zIndex:{
      type:Number,
      value:1
    }
  },
  data: {
    tabs:[],
    titleScroll:false
  },
  relations: {
    '../ui-tab/ui-tab': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function(target) {
      console.log(target)
      console.log(this)
        // this.childs.push(target);
        this.updataTabs(this.data.tabs.concat(target.data))
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged: function(target) {
      console.log(target)

        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function(target) {
      console.log(target)

        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },
  beforeCreate() {
    this.childs = [];
  },
  methods: {
    updataTabs(tabs){
      tabs = tabs||this.data.tabs;
      this.setData({
        tabs,
        titleScroll:tabs.length>4
      })
    },
    _getAllLi: function(){
      // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
      var nodes = this.getRelationNodes('../ui-tab/ui-tab')
      console.log(nodes)
    }
  },
  ready: function(){
    this._getAllLi()
  }
})
