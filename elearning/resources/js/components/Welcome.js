import React from 'react'

const Welcome = () => {
  
  const closeAd= ()=>{
    document.getElementById('adv_content').classList.add('hidechap');
    document.getElementById('close_ad').classList.add('hidechap');
    document.getElementById('open_ad').classList.remove('hidechap');
  }
  const openAd= ()=>{
    document.getElementById('adv_content').classList.remove('hidechap');
    document.getElementById('close_ad').classList.remove('hidechap');
    document.getElementById('open_ad').classList.add('hidechap');
  }
  
  return (
    <>
    <div className="main" id="main">
    <div id="inner_content" className="container-fluid">
    <div className="row">
    <div className="sm-col-12">
          
    <div className="inner_adv">
    <div className="card-body"><h4>This is inner Adv. box.</h4>
    <h5>2nd ADV. Will Appear Here!</h5>
    <h6>Here you can also attach any photos related to that Adv.<img src=""/></h6>
    </div>
    </div>
    
    </div>
    </div>
    </div>

      <div id="upper_content bg-secondary" className="container-fluid">
      <div className="row">
      <div className="sm-col-11" id="adv_content">
      <h4>Ad Will Appear Here!</h4>
      <p>This is ad section, currently displaying static content.</p>
      </div>
      <button onClick={closeAd} className="btn btn-primary" id="close_ad">^</button>
      <button onClick={openAd} className="btn btn-primary hidechap" id="open_ad">v</button>
      </div>

      <div className="row" >
      <div className="sm-col-11" id="slide_content">
      <div id="slide">
      <h5>Image Will Appear Here!</h5>
      <img src=""/>
      </div>
      </div>
      </div>
     
      

      <div className="row">
      <div className="sm-col-12" id="outer_content">
      <div className="card-header bg-secondary"><h5>This is title of topic</h5><hr/>
      <div className="card-body bg-secondary">This is topic content or description represented in lorem form.
      sdkjbjk jgghjf jfjgffi gkgugho gigigfigiugu hhojhijhp ugyfy ggfddg jhgggff gvjfdjh fjufuyf fbhkjh
      gguhgh hkhhjoi hhjl ygfgyyvg fdtujh ffugu fgyfyuki gyfgygiu giuui ggiugi gkkbhklho ggibgug gyvfhjkjgol
      gghu hguhiojh hhiojhi hhhoihp hlhji hojhpj hlojjho hohijhihoh bkhhghiol hjolijijh hhohoihh kigkg
      fdsgsgs sggwg qryikl wwwery wehtyh weyru ewreyts srtter4 ssrttyh sste45 steytdrg rtgttt retwwe
      
      </div>
      </div>
      
      <div className="card-header bg-secondary"><h5>This is title of topic</h5><hr/>
      <div className="card-body bg-secondary">This is topic content or description represented in lorem form.
      sdkjbjk jgghjf jfjgffi gkgugho gigigfigiugu hhojhijhp ugyfy ggfddg jhgggff gvjfdjh fjufuyf fbhkjh
      gguhgh hkhhjoi hhjl ygfgyyvg fdtujh ffugu fgyfyuki gyfgygiu giuui ggiugi gkkbhklho ggibgug gyvfhjkjgol
      gghu hguhiojh hhiojhi hhhoihp hlhji hojhpj hlojjho hohijhihoh bkhhghiol hjolijijh hhohoihh kigkg
      fdsgsgs sggwg qryikl wwwery wehtyh weyru ewreyts srtter4 ssrttyh sste45 steytdrg rtgttt retwwe
      
      </div>
      </div>

      <div className="blank"></div>

      <div className="card-header bg-secondary"><h5>This is title of topic</h5><hr/>
      <div className="card-body bg-secondary">This is topic content or description represented in lorem form.
      sdkjbjk jgghjf jfjgffi gkgugho gigigfigiugu hhojhijhp ugyfy ggfddg jhgggff gvjfdjh fjufuyf fbhkjh
      gguhgh hkhhjoi hhjl ygfgyyvg fdtujh ffugu fgyfyuki gyfgygiu giuui ggiugi gkkbhklho ggibgug gyvfhjkjgol
      gghu hguhiojh hhiojhi hhhoihp hlhji hojhpj hlojjho hohijhihoh bkhhghiol hjolijijh hhohoihh kigkg
      fdsgsgs sggwg qryikl wwwery wehtyh weyru ewreyts srtter4 ssrttyh sste45 steytdrg rtgttt retwwe
      
      </div>
      </div>
      
      <div className="card-header bg-secondary"><h5>This is title of topic</h5><hr/>
      <div className="card-body bg-secondary">This is topic content or description represented in lorem form.
      sdkjbjk jgghjf jfjgffi gkgugho gigigfigiugu hhojhijhp ugyfy ggfddg jhgggff gvjfdjh fjufuyf fbhkjh
      gguhgh hkhhjoi hhjl ygfgyyvg fdtujh ffugu fgyfyuki gyfgygiu giuui ggiugi gkkbhklho ggibgug gyvfhjkjgol
      gghu hguhiojh hhiojhi hhhoihp hlhji hojhpj hlojjho hohijhihoh bkhhghiol hjolijijh hhohoihh kigkg
      fdsgsgs sggwg qryikl wwwery wehtyh weyru ewreyts srtter4 ssrttyh sste45 steytdrg rtgttt retwwe
      
      </div>
      </div>

      <div className="card-header bg-secondary"><h5>This is title of topic</h5><hr/>
      <div className="card-body bg-secondary">This is topic content or description represented in lorem form.
      sdkjbjk jgghjf jfjgffi gkgugho gigigfigiugu hhojhijhp ugyfy ggfddg jhgggff gvjfdjh fjufuyf fbhkjh
      gguhgh hkhhjoi hhjl ygfgyyvg fdtujh ffugu fgyfyuki gyfgygiu giuui ggiugi gkkbhklho ggibgug gyvfhjkjgol
      gghu hguhiojh hhiojhi hhhoihp hlhji hojhpj hlojjho hohijhihoh bkhhghiol hjolijijh hhohoihh kigkg
      fdsgsgs sggwg qryikl wwwery wehtyh weyru ewreyts srtter4 ssrttyh sste45 steytdrg rtgttt retwwe
      
      </div>
      </div>
      
      <div className="card-header bg-secondary"><h5>This is title of topic</h5><hr/>
      <div className="card-body bg-secondary">This is topic content or description represented in lorem form.
      sdkjbjk jgghjf jfjgffi gkgugho gigigfigiugu hhojhijhp ugyfy ggfddg jhgggff gvjfdjh fjufuyf fbhkjh
      gguhgh hkhhjoi hhjl ygfgyyvg fdtujh ffugu fgyfyuki gyfgygiu giuui ggiugi gkkbhklho ggibgug gyvfhjkjgol
      gghu hguhiojh hhiojhi hhhoihp hlhji hojhpj hlojjho hohijhihoh bkhhghiol hjolijijh hhohoihh kigkg
      fdsgsgs sggwg qryikl wwwery wehtyh weyru ewreyts srtter4 ssrttyh sste45 steytdrg rtgttt retwwe
      
      </div>
      </div>

      <div className="blank"></div>
      
      <div className="card-header bg-secondary"><h5>This is title of topic</h5><hr/>
      <div className="card-body bg-secondary">This is topic content or description represented in lorem form.
      sdkjbjk jgghjf jfjgffi gkgugho gigigfigiugu hhojhijhp ugyfy ggfddg jhgggff gvjfdjh fjufuyf fbhkjh
      gguhgh hkhhjoi hhjl ygfgyyvg fdtujh ffugu fgyfyuki gyfgygiu giuui ggiugi gkkbhklho ggibgug gyvfhjkjgol
      gghu hguhiojh hhiojhi hhhoihp hlhji hojhpj hlojjho hohijhihoh bkhhghiol hjolijijh hhohoihh kigkg
      fdsgsgs sggwg qryikl wwwery wehtyh weyru ewreyts srtter4 ssrttyh sste45 steytdrg rtgttt retwwe
      
      </div>
      </div>
      
      <div className="card-header bg-secondary"><h5>This is title of topic</h5><hr/>
      <div className="card-body bg-secondary">This is topic content or description represented in lorem form.
      sdkjbjk jgghjf jfjgffi gkgugho gigigfigiugu hhojhijhp ugyfy ggfddg jhgggff gvjfdjh fjufuyf fbhkjh
      gguhgh hkhhjoi hhjl ygfgyyvg fdtujh ffugu fgyfyuki gyfgygiu giuui ggiugi gkkbhklho ggibgug gyvfhjkjgol
      gghu hguhiojh hhiojhi hhhoihp hlhji hojhpj hlojjho hohijhihoh bkhhghiol hjolijijh hhohoihh kigkg
      fdsgsgs sggwg qryikl wwwery wehtyh weyru ewreyts srtter4 ssrttyh sste45 steytdrg rtgttt retwwe
      
      </div>
      </div>
      
      <div className="card-header bg-secondary"><h5>This is title of topic</h5><hr/>
      <div className="card-body bg-secondary">This is topic content or description represented in lorem form.
      sdkjbjk jgghjf jfjgffi gkgugho gigigfigiugu hhojhijhp ugyfy ggfddg jhgggff gvjfdjh fjufuyf fbhkjh
      gguhgh hkhhjoi hhjl ygfgyyvg fdtujh ffugu fgyfyuki gyfgygiu giuui ggiugi gkkbhklho ggibgug gyvfhjkjgol
      gghu hguhiojh hhiojhi hhhoihp hlhji hojhpj hlojjho hohijhihoh bkhhghiol hjolijijh hhohoihh kigkg
      fdsgsgs sggwg qryikl wwwery wehtyh weyru ewreyts srtter4 ssrttyh sste45 steytdrg rtgttt retwwe
      
      </div>
      </div>

      
      </div>
      </div>
      </div>
      <div id="footer" className="row">
      <div className="sm-col-12">
      <p>copyright@2022 by techRaj</p>
      </div>
      
      </div>
      </div>    
      
    </>
  )
}

export default Welcome
