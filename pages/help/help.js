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
        date:"2021-11-18",
        time:"13:20:53"
      })
      var article = `
        
        <b><h1>What is GitHub?</h1><b>
        
        <p>GitHub 是一个版本控制和协作的代码托管平台。无论你和小伙伴们身处何地，它都可以让你们一起合作开发项目。
        <p>这个教程教你一些 GitHub 的基本要领，像仓库、分支、提交和 Pull Requests。你将创建你自己的 Hello World 仓库并学会 GitHub 的 Pull Request 的工作流程（创建和审查代码的一种流行方式）。</p>
        
        <b><h1>第一步：创建一个仓库</h1></b>
        <p>仓库通常是用来组织一个项目的。仓库可以存放文件夹、文件、图片、视频、电子表格还有数据集 —— 任何你的项目需要的内容。
        <p>我们推荐你在项目中包含一个 README 文件，或者建立一个可以查看项目信息的文件。在 GitHub 上，一旦你创建一个新的仓库，就可以很容易地创建一个 README 文件和 license 文件（用于声明版权）。
        <p>你的 hello-world 仓库可以是一个分享想法，资源，甚至是和其他小伙伴讨论交流的地方。</p>
        
        <b><h2>创建一个新的仓库:</h2></b>
        <p><br>1. 在页面的右上角，点击头像隔壁的“+”号，选择 <font color="#FF0000">New repository</font></p>
        <img src="/image/help/01.jpg"></img>
        <p><br>2. 将你的仓库命名为 <font color="#FF0000">hello-world</font>
        <br>3. 为该项目写上一段简短的描述
        <br>4. 勾选 <font color="#FF0000">Initialize this repository with a README</font>（为该仓库初始化一个 README 文件
        <br>5. 最后点击 <font color="#FF0000">Create repository</font> </p>
        <img src="/image/help/02.jpg"></img>

        <b><h1>第二步：创建一个分支</h1></b>
        <p>通过分支的方式，允许你在同一时间对仓库不同版本的内容进行操作。
        <p>默认情况下，你的仓库中拥有一个叫做 master 的分支，它被认为是主分支。我们可以建立不同的分支进行测试和编辑，完善以后再提交至 master。
        <p>当你在 master 建立一个分支时，你拷贝的是当时 master 分支里的内容。如果其他小伙伴修改了主分支的内容，你可以将这些更新的内容拉取到你的分支上。</p>
        <img src="/image/help/03.jpg"></img>
        <p>在 GitHub 中，我们的开发人员、作家、设计师在分支上修复 bug 和开发新功能，这些都是独立于 master 分支的。当这些工作确认完成之后，他们将合并回 master 分支。</p>

        <b><h2>创建一个新的分支:</h2></b>
        <p><br>1. 来到你的新仓库 hello-world 中
        <br>2. 点击那个叫做 <font color="#FF0000">branch: master</font> 的下拉按钮
        <br>3. 在新分支的文本框中输入你的分名称：<font color="#FF0000">readme-edits</font> 
        <br>4. 单击蓝色框框中的 <font color="#FF0000">Create branch</font> 或直接回车键走起
        <br>现在你拥有了两个分支：<font color="#FF0000">master 和 readme-edits</font>。它们看起来很像，但这只是暂时的！下面我们将修改添加到新的分支里。</p>


        <b><h1>第三步：提交修改</h1></b>
        <p>现在你位于 readme-edits 分支的代码视图了，它是拷贝自 master 分支的。让我们做些修改吧！
        <p>在 GitHub 上，保存修改被称为提交（commits）。每次提交都有一个关联的提交信息，用于描述你做所的修改。提交信息将捕获你的修改历史，这样其他小伙伴就能知道你到底干了啥。</p>
        <b><h2>提交修改:</h2></b>
        <p><br>1. 点击 README.md 文件
        <br>2. 点击<font color="#FF0000">文件视图右上角的铅笔图标</font>进行编辑
        <br>3. 在编辑框中，随便写一些东西
        <br>4. 在下边填写提交信息并描述你的修改
        <img src="/image/help/04.jpg"></img>
        <br>5. 最后点击 <font color="#FF0000">Commit changes</font> 按钮
        <p>这些修改只影响了 readme-edits 分支的 README 文件，而 master 的 README 文件并没有被改变，所以现在两个分支的内容已经不同了。</p>

        <b><h1>第四步：发起 Pull Request</h1></b>
        <p>现在你拥有一个非 master 分支的修改，你可以发起一个 pull request。
        <p>Pull Requests 是 GitHub 实现合作的核心。当你发起一个 pull request 的时候，表示你希望别人将你修改的内容进行审查然后合并到他们的分支中去。
        <p>Pull Requests 会显示每个分支的不同之处，添加（绿色）和删减（红色）的地方都会显示出来。
        <p>只要执行一次提交，就可以开启一个 pull request 和讨论，不需要你将所有的代码都完成。
        <p>通过使用 GitHub 的 @ 通知系统，你可以获得指定小伙伴或团队（无论他们身在何处）对 pull requset 的反馈消息。
        <p>你也可以在自己的仓库中开启 pull requests 并将它们合并进来。这是你在进行大项目开发前先熟悉 GitHub 流程的好方法。</p>
        <b><br><h2>为修改过的 README 文件开启一个 Pull Request:</h2></b>
        <img src="/image/help/05.jpg"></img>
        <img src="/image/help/06.jpg"></img>
        <img src="/image/help/07.jpg"></img>
        <img src="/image/help/08.jpg"></img>
        <img src="/image/help/09.jpg"></img>
        <p>完成之后，点击 Create pull request 按钮即可。</p>


        <b>第五步：合并你的 Pull Request
        <p>最后一个步骤，是时候将你的修改合并到一块了 —— 合并你的 readme-edits 分支到 master 分支中。
        <p><br>1. 点击绿色按钮 Merge pull request 将修改的内容合并到 master 分支中
        <img src="/image/help/10.jpg"></img>
        <br>2. 点击 Confirm merge 按钮
        <img src="/image/help/11.jpg"></img>
        <br>3. 点击紫色框中的 Delete branch 按钮删除分支，因为它已经合并进来了
        <img src="/image/help/12.jpg"></img>

        <p>------------------------------</p>
        
        <b><h1>Gitee简介</h1></b>
        <p>Gitee.com（码云） 是 OSCHINA.NET 推出的代码托管平台，支持 Git 和 SVN，提供免费的私有仓库托管。目前已有超过 600 万的开发者选择 Gitee。</p>
        
        <b><h1>一、为什么要用gitee?</h1>
        <p><br>1.github卡、慢、还经常进不去
        <br>2.github是老外的，gitee是我们自已人的
        <br>3.Gitee 提供免费的 Git 仓库，还集成了代码质量检测、项目演示等功能</p>

        <b><h1>二、新建仓库</h1>
        <b><br><h2>2.1 创建远程仓库</h2>
        <p>注册成功后，进入工作台中，新建仓库
        <img src="/image/help/13.jpg"></img>
        <p>根据需要，选择，然后点击创建
        <img src="/image/help/14.jpg"></img>
        <p>创建成功：
        <img src="/image/help/15.jpg"></img></p>
        <b><br><h2>2.2 初始化本地仓库</h2>
        <br><h3>2.2.1 下载Git Bash客户端</h3>
        <p>初始化本地仓库，需要安装客户端。  https://git-scm.com/
        <img src="/image/help/16.jpg"></img>
        <img src="/image/help/17.jpg"></img>
        <p>一直默认选择，安装完成。</p>
        <b><br><h3>2.2.2 运行软件</h3>
        <b><br><h3>2.2.3 获取SSHKEY</h3>
        <p><br>1.生成SSHKEY : 输入 <font color="#FF0000">ssh-keygen -t rsa -C "你的邮箱"</font>需要按三次enter键：
        <img src="/image/help/18.jpg"></img>
        <br>2. 查看public key : 输入<font color="#FF0000">cat ~/.ssh/id_rsa.pub</font>
        <br>3. 添加到gittee中
        <p> 进入getee个人主页设置页面
        <img src="/image/help/19.jpg"></img>
        <img src="/image/help/20.jpg"></img>
        <p>点击确定，需要验证密码，输入密码。</p>
        <img src="/image/help/21.jpg"></img>
        <b><br><h3>2.2.4 绑定和添加</h3>
        <p>再次回到git bash窗口中，输入以下命令： ssh -T git@gitee.com
        <p>出现询问的时候，输入yes,回车
        <img src="/image/help/22.jpg"></img>
        <p>出现上图，代表成功。</p>
        <b><br><h3>2.2.5 设置个人信息</h3>
        <p>尽量与git网站注册信息一致  
        <p><font color="#FF0000">git config --global user.name "你的名字"<p> 
        <p><font color="#FF0000">git config --global user.email "邮箱"</p>
        <img src="/image/help/23.jpg"></img>
        <b><br><h2>2.2.6 初始化本地仓库</h2>
        <p><br>1.克隆
        <p>输入<font color="#FF0000">git clone https://gitee.com/你的名字/仓库名</font>
        <img src="/image/help/24.jpg"></img>
        <br>2. 本地初始化
        <p><font color="#FF0000">cd d:/software/git</font> #在本地创建一个目录，并切换，不要用反斜杠\，会报错。
        <p><font color="#FF0000">git init</font> #初始化本地项目
        <p><font color="#FF0000">git remote add origin https://gitee.com/irving-hua/git.git</font> #后面为你的远程仓库地址
        <p>查看结果：</p>
        <img src="/image/help/25.jpg"></img>

        <b><h1>三、代码上传</h1>
        <b><br></h2>3.1 在本地创建文件</h2>
        <p>如，在我的git目录下，新建一个hello.txt文件，里面随便添加了一句：hello git !并切换到git目录。</p>
        <b><br><h2>3.2 添加文件</h2>
        <p><font color="#FF0000">git add -A </font>  "-A"代表添加所有文件，也就一个文件。</p>
        <img src="/image/help/26.jpg"></img>
        <b><br><h2>3.3 提交文件</h2>
        <p>运行命令： <font color="#FF0000">git commit -m "hello"</font> 
        <img src="/image/help/27.jpg"></img>
        <p>上图中可以看出，已经创建成功。</p>
        <b><br><h2>3.4 推送到远程仓库</h2>
        <p>运行命令：
        <font color="#FF0000">git push -u origin irving #origin</font>(后面接你的名字，也就是你目录最的括号内的)
        <p>运行命令后，会弹出帐号密码框，输入帐号密码
        <img src="/image/help/28.jpg"></img>
        <p>输入帐号和密码后，点击确定。
        <img src="/image/help/29.jpg"></img>
        <p>OK。提交成功。</p>

        <b><h1>四、gitee查看代码提交</h1></b>
        <p>刷新你的主页，可以看到刚才的代码，已经提交成功。</p>
        <img src="/image/help/30.jpg"></img>
        <img src="/image/help/31.jpg"></img>
        
        <b><h1>五、报错处理</h1>
        <b><br><h2>5.1 fatal: remote origin already exists.</h2></b>
        <p>执行命令中出现已经存在的情况，如添加到远程仓库时报已经存在。
        <p>解决方案：<br>把本地初始化目录删掉掉，再重新创建一个，再次初始化，按照步骤2.2.6 再来一次就OK了</p></br>
        <b><br><h2>5.2 fatal: not a git repository (or any of the parent directories): .git</b></h2>
        <p>执行命令中，出现这种报错时。
        <p>解决方案：<br>把本地初始化目录删掉掉，再重新创建一个，再次初始化，按照步骤2.2.6 再来一次就OK了。<br>
        <p>-----------------------------------------</p>
        <p>-----------------------------------------</p>
        
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