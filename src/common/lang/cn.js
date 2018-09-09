const message = {
  nav: { //导航
    home: '首页',
    about: '关于',
    service: '服务项目',
    plan: '精英计划',
    hangye: '行业领域',
    information: '最新资讯',
    hunter: '兼职猎头',
    hotjob: '热门职位'
  },
  searchPlaceholder: '职位搜索',
  shouye:{ //首页
    about:'关于寰逸',
    about_text:'一家为企业与候选人提供综合性人才服务的机构，是HR专业的合作伙伴与候选人的职业生涯规划师。',
    service:'服务项目',
    service_text:'通过提供一站式服务，与企业及候选人共成长。 为企业定制人才解决方案，为候选人提供专家咨询服务，以及附加值及高端人才服务。',
    plan:'精英计划',
    plan_text:'应企业发展及新人才需求的理解与探讨，依据专业委托流程，对人才进行甄选与面试，直至人才到位的入职跟踪，为企业提供精英。',
    hangye:'行业领域',
    hangye_text:'总部设在广州，业务涉及中国内地及港澳台地区及海外机会，服务领域包括高科技、IT/互联网、市场传媒、制造业、零售业、金融财会等。',
    hunter:'兼职猎头',
    hunter_text:'对猎头事业感兴趣的朋友，这里有一个发挥所长的平台，在共享平台携手合作共赢，基于朋友圈精准推荐，介绍成功有惊喜谢礼。'
  },
  about: { //关于
    gk: '公司概况',
    gk_text:`     寰逸HR，即广州寰逸企业管理咨询有限公司，是一家致力于给国内外企业与候选人提供综合性人才服务的机构，成立于2012年，与行业内多家标杆客户保持良好合作关系，服务领域包括：高科技、IT/互联网、市场传媒、制造业、零售业、金融财会等。

    寰逸HR的定位是HR专业的合作伙伴与候选人的职业生涯规划师。通过提供一站式服务，与企业及候选人共成长。既深入、清晰了解企业需求，为企业寻找所期待的合适人选，又分析解剖候选人的优势与特性，发掘其潜力，为双方提供最佳的人才解决方案。

    总部设在广州，业务涉及中国内地\港澳台地区及海外机会，行业内多家标杆客户都是合作伙伴，拥有丰富的客户资源和成功案例。寰逸HR，以快乐工作、耐心沟通为指引，让来自熟悉各行业的资深顾问，在活跃的氛围下施展优势，获得更多。`,
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
      more:'了解更多'
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
    }
  },
  service: { //服务项目
    fangan: '企业定制化人才解决方案',
    fangan_text: '针对每个企业作为细分市场的特点及需求，分析人才需求状况，贴心定制适合企业发展的人才解决方案。',
    zixun: '候选人专家咨询服务',
    zixun_text: '针对每个候选人作为特别的个体，分析自身的特性与优势 ，提供特定阶段的职业生涯规划，并找到合适成长的企业。包括：',
    zixun_list: {
      item1: {
        icon: '/static/service/service-icon1.png',
        title: '职位介绍',
        content: '在充分了解职位概要后，以标准的工作程序，向候选人阐明职位描述，并表明候选人合适之处。'
      },
      item2: {
        icon: '/static/service/service-icon2.png',
        title: '职业生涯设计',
        content: '以专业有效的职业生涯设计帮助候选人正确设定自己的职业发展目标，找到合适的职位。'
      },
      item3: {
        icon: '/static/service/service-icon3.png',
        title: '机会推荐',
        content: '把合适的候选人推荐到合适的职位，并安排企业面见。'
      },
      item4: {
        icon: '/static/service/service-icon4.png',
        title: '简历制造',
        content: ' 具有针对性地把候选人规范化、逻辑化地介绍给企业，提炼闪光点，突出优势与实力'
      },
      item5: {
        icon: '/static/service/service-icon5.png',
        title: '面试指导',
        content: '面试前，顾问将会针对职位及企业特性，对候选人进行有针对性的面试技巧指导，帮助候选人能在面试中呈现最佳状态'
      },
      item6: {
        icon: '/static/service/service-icon6.png',
        title: '入职跟进',
        content: '成功入职后顾问将会进行跟踪调查，了解企业与候选人双向情况，及时调整候选人工作中出现的情况，让候选人能更快地适应企业的工作氛围，在企业更好地成长'
      },
    },
    dingwei: '企业附加值服务定位',
    dingwei_text: '可定期为企业提供具有价值的咨询服务。',
    rencai: '高端人才服务',
    rencai_text: '针对高端人才，拥有一个专业的顾问团队，特别定制服务。',
  },
  plan: { //精英计划
    plan: {
      title: ' 精英计划',
      stitle: ' 专业优势：',
      content: ' 以专业解决企业用人需求是我们的价值所在，凭借专业优势达至人尽其才，令企业发展至更高层的级别。',
      youshi: `（1）专业、专注、质量<br/>（2）网络广泛、快速精准<br/>（3）愉快合作、发掘最佳<br/>（4）专业培训、与时俱进<br/>（5）最新资讯分享`
    },
    plan_list:{
      tantao: {
        icon:'/static/plan/plan-icon1.png',
        title: '企业发展+新人才需求的理解与探讨',
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
    more:'了解更多',
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
    advise:'专业建议'
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
