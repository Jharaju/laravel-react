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
      
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/storage/images/slide1.jpg" class="slide_img d-block w-100" alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="storage/images/slide2.jpg" class="slide_img d-block w-100" alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="storage/images/slide3.jpg" class="slide_img d-block w-100" alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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
