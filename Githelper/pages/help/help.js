var WxParse = require('./wxParse/wxParse.js');
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    date: "",
    time: "",
    id: ''
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
  },
  onShow: function () {

    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
        selected: 2
    })
}
    wx.showLoading({
      title: '加载中...',
    })
    var that = this;
 
    // 模拟获取数据
    setTimeout(function () {
      that.setData({
        title:'Gitee 和 Github 的新手教学',
        date:"2021-11-13",
        time:"13:20:53"
      })
      var article = `
        <b>What is GitHub?</b>
        
        <p>GitHub 是一个版本控制和协作的代码托管平台。无论你和小伙伴们身处何地，它都可以让你们一起合作开发项目。
        <p>这个教程教你一些 GitHub 的基本要领，像仓库、分支、提交和 Pull Requests。你将创建你自己的 Hello World 仓库并学会 GitHub 的 Pull Request 的工作流程（创建和审查代码的一种流行方式）。</p>
        
        <p>-----------------------------------------</p>
        
        <b>第一步：创建一个仓库</b>
        <p>仓库通常是用来组织一个项目的。仓库可以存放文件夹、文件、图片、视频、电子表格还有数据集 —— 任何你的项目需要的内容。
        <p>我们推荐你在项目中包含一个 README 文件，或者建立一个可以查看项目信息的文件。在 GitHub 上，一旦你创建一个新的仓库，就可以很容易地创建一个 README 文件和 license 文件（用于声明版权）。
        <p>你的 hello-world 仓库可以是一个分享想法，资源，甚至是和其他小伙伴讨论交流的地方。</p>
        
        <b>创建一个新的仓库</b>
        <p><br>1. 在页面的右上角，点击头像隔壁的“+”号，选择 New repository</p>
        <img src="/image/help/01.jpg"></img>
        <p><br>2. 将你的仓库命名为 hello-world
        <br>3. 为该项目写上一段简短的描述
        <br>4. 勾选 Initialize this repository with a README（为该仓库初始化一个 README 文件
        <br>5. 最后点击 Create repository </p>
        <img src="/image/help/02.jpg"></img>

        <p>-----------------------------------------</p>

        <b>第二步：创建一个分支</b>
        <p>通过分支的方式，允许你在同一时间对仓库不同版本的内容进行操作。
        <p>默认情况下，你的仓库中拥有一个叫做 master 的分支，它被认为是主分支。我们可以建立不同的分支进行测试和编辑，完善以后再提交至 master。
        <p>当你在 master 建立一个分支时，你拷贝的是当时 master 分支里的内容。如果其他小伙伴修改了主分支的内容，你可以将这些更新的内容拉取到你的分支上。</p>
        <img src="/image/help/03.jpg"></img>
        <p>在 GitHub 中，我们的开发人员、作家、设计师在分支上修复 bug 和开发新功能，这些都是独立于 master 分支的。当这些工作确认完成之后，他们将合并回 master 分支。</p>

        <b>创建一个新的分支</b>
        <p><br>1. 来到你的新仓库 hello-world 中
        <br>2. 点击那个叫做 branch: master 的下拉按钮
        <br>3. 在新分支的文本框中输入你的分名称：readme-edits 
        <br>4. 单击蓝色框框中的 Create branch 或直接回车键走起
        <br>现在你拥有了两个分支：master 和 readme-edits。它们看起来贼很像，但这只是暂时的！下面我们将修改添加到新的分支里。</p>

        <p>-----------------------------------------</p>

        <b>第三步：提交修改</b>
        <p>现在你位于 readme-edits 分支的代码视图了，它是拷贝自 master 分支的。让我们做些修改吧！
        <p>在 GitHub 上，保存修改被称为提交（commits）。每次提交都有一个关联的提交信息，用于描述你做所的修改。提交信息将捕获你的修改历史，这样其他小伙伴就能知道你到底干了啥。
        <b>提交修改</b>
        <p><br>1. 点击 README.md 文件
        <br>2. 点击文件视图右上角的铅笔图标进行编辑
        <br>3. 在编辑框中，随便写一些东西
        <br>4. 在下边填写提交信息并描述你的修改
        <img src="/image/help/04.jpg"></img>
        <br>5. 最后点击 Commit changes 按钮
        <p>这些修改只影响了 readme-edits 分支的 README 文件，而 master 的 README 文件并没有被改变，所以现在两个分支的内容已经不同了。</p>

        <p>-----------------------------------------</p>

        <b>第四步：发起 Pull Request</b>
        <p>现在你拥有一个非 master 分支的修改，你可以发起一个 pull request。
        <p>Pull Requests 是 GitHub 实现合作的核心。当你发起一个 pull request 的时候，表示你希望别人将你修改的内容进行审查然后合并到他们的分支中去。
        <p>Pull Requests 会显示每个分支的不同之处，添加（绿色）和删减（红色）的地方都会显示出来。
        <p>只要执行一次提交，就可以开启一个 pull request 和讨论，不需要你将所有的代码都完成。
        <p>通过使用 GitHub 的 @ 通知系统，你可以获得指定小伙伴或团队（无论他们身在何处）对 pull requset 的反馈消息。
        <p>你也可以在自己的仓库中开启 pull requests 并将它们合并进来。这是你在进行大项目开发前先熟悉 GitHub 流程的好方法。
        <b><br>为修改过的 README 文件开启一个 Pull Request</b>
        <img src="/image/help/05.jpg"></img>
        <img src="/image/help/06.jpg"></img>
        <img src="/image/help/07.jpg"></img>
        <img src="/image/help/08.jpg"></img>
        <img src="/image/help/09.jpg"></img>
        <p>完成之后，点击 Create pull request 按钮即可。</p>

        <p>-----------------------------------------</p>

        <b>第五步：合并你的 Pull Request
        <p>最后一个步骤，是时候将你的修改合并到一块了 —— 合并你的 readme-edits 分支到 master 分支中。
        <p><br>1. 点击绿色按钮 Merge pull request 将修改的内容合并到 master 分支中
        <img src="/image/help/10.jpg"></img>
        <br>2. 点击 Confirm merge 按钮
        <img src="/image/help/11.jpg"></img>
        <br>3. 点击紫色框中的 Delete branch 按钮删除分支，因为它已经合并进来了
        <img src="/image/help/12.jpg"></img>

        <p>-----------------------------------------</p>
        
        <b>gitee简介
        <p>Gitee.com（码云） 是 OSCHINA.NET 推出的代码托管平台，支持 Git 和 SVN，提供免费的私有仓库托管。目前已有超过 600 万的开发者选择 Gitee。
        <b>为什么要用gitee?
        <p><br>1.github卡、慢、还经常进不去
        <br>2.github是老外的，gitee是我们自已人的
        <br>3.Gitee 提供免费的 Git 仓库，还集成了代码质量检测、项目演示等功能</p>

        <p>-----------------------------------------</p>

        <b>二、新建仓库
        <br>2.1 创建远程仓库
        <p>注册成功后，进入工作台中，新建仓库
        <img src="/image/help/13.jpg"></img>
        <p>根据需要，选择，然后点击创建
        <img src="/image/help/14.jpg"></img>
        <p>创建成功：
        <img src="/image/help/15.jpg"></img>
        <b>2.2 初始化本地仓库
        <br>2.2.1 下载Git Bash客户端
        <p>初始化本地仓库，需要安装客户端。  https://git-scm.com/
        <img src="/image/help/16.jpg"></img>
        <img src="/image/help/17.jpg"></img>
        <p>一直默认选择，安装完成。
        <b><br>2.2.2 运行软件
        <b><br>2.2.3 获取SSHKEY
        <p>1.生成SSHKEY : 输入 ssh-keygen -t rsa -C "你的邮箱"
        <p>需要按三次enter键：
        <img src="/image/help/18.jpg"></img>
        <p>2. 查看public key : 输入 cat ~/.ssh/id_rsa.pub
        <p>3. 添加到gittee中
        <p> 进入getee个人主页设置页面
        <img src="/image/help/19.jpg"></img>
        <img src="/image/help/20.jpg"></img>
        <p>点击确定，需要验证密码，输入密码。
        <img src="/image/help/21.jpg"></img>

        















      `;
      /**
      * WxParse.wxParse(bindName , type, data, target,imagePadding)
      * 1.bindName绑定的数据名(必填)
      * 2.type可以为html或者md(必填)
      * 3.data为传入的具体数据(必填)
      * 4.target为Page对象,一般为this(必填)
      * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
      */
      WxParse.wxParse('article', 'html', article, that, 20);
      
      // 更改数据、获取新数据完成
      wx.hideLoading();
    }, 500)
  }
})