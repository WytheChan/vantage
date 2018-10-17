const message = {
  title:'寰逸官网',
  content:'内容',
  nav: { //导航
    home: '首页',
    about: '关于',
    service: '服务项目',
    plan: '培训校园',
    hangye: '职位需求',
    information: '最新资讯',
    hunter: '兼职猎头',
    hotjob: '热门职位'
  },
  searchPlaceholder: '职位搜索',
  shouye:{ //首页
    about:'关于寰逸',
    about_text:`一家以专业的态度为企业与候选人<br/>提供综合性人才服务的HR机构`,
    service:'服务项目',
    service_text:`我们拥有经验丰富的服务团队<br/>为企业与候选人提供一站式的优质服务`,
    plan:'培训校园',
    plan_text:`应企业对于新人才的需求<br/>我们深入校园进行挑选更多更好的优秀人才`,
    hangye:'职位需求',
    hangye_text:`我们提供的综合性人才服务目前已覆盖<br/>中国内地、港澳台以及海外的各领域各行业`,
    hunter:'兼职猎头',
    hunter_text:`加入我们，你不仅能在这个平台上大展身手<br/>还能够收获丰富的经验与奖励`
  },
  about: { //关于
    gk: '公司概况',
    gk_text:`     寰逸HR，即广州寰逸企业管理咨询有限公司，是一家致力于给国内外企业与候选人提供综合性人才服务的机构，成立于2012年，与行业内多家标杆客户保持良好合作关系，服务领域包括：高科技、IT/互联网、市场传媒、制造业、零售业、金融财会等。

    寰逸HR的定位是HR专业的合作伙伴与候选人的职业生涯规划师。通过提供一站式服务，与企业及候选人共成长。既深入、清晰了解企业需求，为企业寻找所期待的合适人选，又分析解剖候选人的优势与特性，发掘其潜力，为双方提供最佳的人才解决方案。

    总部设在广州，业务涉及中国内地、港澳台地区及海外机会，行业内多家标杆客户都是合作伙伴，拥有丰富的客户资源和成功案例。寰逸HR，以快乐工作、耐心沟通为指引，让来自熟悉各行业的资深顾问，在活跃的氛围下施展优势，获得更多。`,
    dw: '企业定位',
    dw_text:'寰逸HR，是HR的专业合作伙伴及候选人的职业生涯规划师。',
    case: '成功案例',
    case_list:{  //案例的类目
      position:'入职职位',
      company:'企业信息',
      yealy:'岗位年薪',
      cycle:'寻猎周期',
      address:'上班地点',
      number:'入职人数',
      more:'了解更多',
      detail:'案例详情',
    },
    promise: '我们的承诺',
    promise_text:'快速的解决方案 | 品质保证的服务 | 时刻与您共成长',
    dynamic: '公司动态',
    contact: '联系我们',
    info:{
      name:'公司名称',
      phone:'电话',
      address:'地址',
      post:'邮编',
      mail:'电子邮箱'
    },
    youshi:'专业优势'
  },
  service: { //服务项目
    fangan: '企业定制化人才解决方案',
    fangan_text: '根据企业委托，跟客户确认需求，进行信息沟通，分析相应的人才状况并提供相关建议，贴心定制适合企业发展的人才解决方案。',
    liucheng:{
      title:'合作流程',
      xuqiu:'了解企业人才需求',
      yixiang:'明确合作意向、建立合作关系',
      diaoyan:'寻访计划、市场调研',
      fankui:'人选搜寻推荐、企业沟通及反馈',
      genjin:' 后续跟进',
      fuzhu:'入职辅助',
      xiezhu:'录用协助',
      goutong:'企业、人选沟通'
    },
    zixun: '候选人专家咨询服务',
    zixun_text: '针对每个候选人作为特别的个体，分析自身的特性与优势 ，提供特定阶段的职业生涯规划，并找到合适成长的企业。包括：',
    zixun_list: {
      
      item2: {
        icon: '/static/service/service-icon2.png',
        title: '职业设计',
        content: '以专业的角度，为候选人的职业发展方向进行有效的定位和设计。'
      },
      item1: {
        icon: '/static/service/service-icon1.png',
        title: '职位介绍',
        content: '为候选人匹配合适的职位之后，以标准的程序阐明职位内容与要求。'
      },
      item4: {
        icon: '/static/service/service-icon4.png',
        title: '简历完善',
        content: '帮助候选人把优势与实力在简历上准确化、规范化、逻辑化向企业展现。'
      },
      item6: {
        icon: '/static/service/service-icon6.png',
        title: '入职跟进',
        content: '入职后继续跟进企业与候选人的双向情况，帮助候选人进行适应与调整。'
      },
      item5: {
        icon: '/static/service/service-icon5.png',
        title: '面试指导',
        content: '针对职位与企业特性，为候选人指导专业的面试技巧，让HR眼前一亮。'
      },
      item3: {
        icon: '/static/service/service-icon3.png',
        title: '人选推荐',
        content: '将合适的候选人推荐到合适的职位，并安排企业面见。'
      },
      
   
    
    },
    dingwei: '企业附加值服务',
    dingwei_text: '可定期为企业提供具有附加值的咨询服务，助力企业发展得更矫健、深远。',
    rencai: '精英计划',
    rencai_text: '针对高端人才，拥有专业的顾问团队，充分沟通掌握精英的实际情况以进行特别定制服务，以达到各得其所，人尽其才。',
  },
  plan: { //精英计划
    plan: {
      title: ' 培训校园',
      stitle: ' 学生培训',
      stitle2: ' 社会人士培训',
      content: ' 进入校园，针对高中学生选专业、大学学生择业方向和相关技能进行培训，在人生关键时点助力学生更清楚认识自己、认识社会，成为目标明确、路径清晰的人。',
      content2: ' 帮助对前途迷茫、不知所措的社会人士提高自我认知能力和取长补短，以能轻装上阵，适得其所。',
      youshi_title:'专业优势',
      youshi: `（1）专业、专注、质量<br/>（2）网络广泛、快速精准<br/>（3）愉快合作、发掘最佳<br/>（4）专业培训、与时俱进<br/>（5）最新资讯分享`
    },
    plan_list:{
      tantao: {
        icon:'/static/plan/plan-icon1.png',
        title: '高端人才服务',
        stitle: '委托',
        content: '根据企业委托，全面沟通发展战略、组织关系、人才缺口，提供职位建议，搜寻最佳人选。'
      },
      liucheng: {
        icon:'/static/plan/plan-icon2.png',
        title: '企业委托流程',
        stitle: '跟进',
        content: '配合企业对人才的甄选与面试，安排适合的面试时间与地点，如需要并安排差旅费用等事宜，并在面试结束后分别联系企业与人选获取反馈信息。'
      },
      mianshi: {
        icon:'/static/plan/plan-icon3.png',
        title: '企业对人才的甄选与面试',
        stitle: '执行',
        content: '在全网数据库和目标公司中快速搜寻合适人选，专业分析，突出优势与实力，推荐面见。'
      },
      genzong: {
        icon:'/static/plan/plan-icon4.png',
        title: '人才到位的跟踪',
        stitle: '跟踪',
        content: '人选确定后协助薪资商议与谈判，提供人选背景资料，入职后时刻跟踪工作情况，给出及时专业指导。'
      },
    },
  },
  hangye:{  //行业
    notjob:'该类别暂无招聘信息',
    more:`了 解 更 多`,
    all:'全部',
    detail:'职位详情',
    resume:'简历投递',
    job_list:{
      yealy:'职务年薪',
      hangye:'所属行业',
      department:'所属部门',
      nature:'企业性质',
      scale:'企业规模',
      name:'公司名',
      address:'地址',
      position:'职位',
      duty:'职责',
      request:'要求',
      jiafen:'特别说明/加分项',
      time:'发布时间'
    },
    footer:{
      gkj:'高科技',
      ls:'零售业',
      it:'IT/互联网',
      jr:'金融财会',
      cm:'市场传媒',
      other:'其它',
      zz:'制造业'
    }
  },
  information:{    //最新资讯
    news:'公司新闻',
    activity:'公司活动',
    advise:'专业建议',
    detail:'文章详情'
  },
  hunter:{  //兼职猎头
    part_time:'兼职猎头',
    content:'对猎头事业感兴趣的朋友，这里有一个发挥所长的平台，在共享平台携手合作共赢，基于朋友圈精准推荐，介绍成功有惊喜谢礼：成功介绍感谢金！想长期兼职的朋友请联系我们，共商合作形式。',
    join:'我要加入 >',
  },
  footer:{  //页面底部
    scan:'扫描二维码关注寰逸公众号'
  }
}

export default message
