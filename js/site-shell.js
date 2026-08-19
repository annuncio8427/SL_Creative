
(() => {
  const P = {
    home:'index.html', work:'portfolio.html', services:'services.html', studio:'about.html',
    journal:'blog.html', contact:'contact.html', book:'book.html', portal:'portal.html',
    caseStudies:'case-studies.html', reels:'reels.html', process:'process-sl-creative-premium.html',
    lab:'creative-lab-sl-creative-premium.html', industries:'industries-sl-creative-premium.html',
    team:'team.html', careers:'careers.html', awards:'awards.html', testimonials:'testimonials-sl-creative-premium.html',
    partners:'partners.html', press:'press.html', faq:'faq-sl-creative-premium.html',
    pricing:'pricing-calculator.html', resources:'resources.html', media:'media-kit.html', support:'support.html',
    timeline:'timeline.html', details:'project-details.html', files:'files.html', invoice:'invoice.html', payments:'payments.html',
    sitemap:'site-map.html', privacy:'privacy-policy.html', terms:'terms-conditions.html', cookies:'cookie-policy.html',
    refund:'refund-policy.html', cancellation:'cancellation-policy.html', nda:'licensing-nda.html', login:'login.html',
    signup:'create-account.html'
  };
  const routes = [
    [['home','home','logo','sl creative'],P.home], [['work','portfolio','selected work','our work'],P.work],
    [['services','disciplines','services & pricing'],P.services], [['about','our story','who we are','studio'],P.studio],
    [['team','our team'],P.team], [['careers'],P.careers], [['contact','get in touch'],P.contact],
    [['book','consultation','book a project','inquire','start a project'],P.book], [['login','sign in','client portal login'],P.login],
    [['create account','register','sign up','join'],P.signup], [['dashboard','client portal','overview'],P.portal],
    [['timeline','milestones'],P.timeline], [['project details'],P.details], [['files','assets library','project files'],P.files],
    [['upload'], 'file-upload.html'], [['invoice','invoices'],P.invoice], [['pricing calculator','estimate'],P.pricing],
    [['quote','project quote'], 'quote.html'], [['resources','downloads'],P.resources], [['support','help desk'],P.support],
    [['privacy policy'],P.privacy], [['terms & conditions','terms of service','terms'],P.terms], [['cookie policy'],P.cookies],
    [['cancellation policy'],P.cancellation], [['refund policy'],P.refund], [['licensing','nda'],P.nda],
    [['case studies'],P.caseStudies], [['reels'],P.reels], [['process'],P.process], [['creative lab'],P.lab],
    [['industries'],P.industries], [['awards','achievements'],P.awards], [['testimonials','reviews'],P.testimonials],
    [['partners'],P.partners], [['press','news'],P.press], [['faq','frequently asked'],P.faq], [['media kit'],P.media]
  ];
  const path = location.pathname.split('/').pop() || 'index.html';
  function pickTarget(text){
    const t=(text||'').replace(/\s+/g,' ').trim().toLowerCase();
    for(const [words,target] of routes){ if(words.some(w=>t===w || t.includes(w))) return target; }
    return null;
  }
  function icon(name){
    const m={menu:'☰',close:'×',arrow:'↗',up:'↑'}; return m[name]||'';
  }

  function injectSLBrandStyles(){
    if(document.getElementById('sl-brand-upgrade-styles')) return;
    const s=document.createElement('style');
    s.id='sl-brand-upgrade-styles';
    s.textContent=`
      .sl-topbar .sl-brand{
        display:flex !important;
        align-items:center !important;
        width:auto !important;
        min-width:0 !important;
        height:54px !important;
        padding:0 !important;
        overflow:hidden !important;
        text-decoration:none !important;
      }
      .sl-topbar .sl-logo-img{
        display:block !important;
        width:150px !important;
        height:54px !important;
        object-fit:contain !important;
        object-position:center !important;
        mix-blend-mode:screen !important;
        filter:drop-shadow(0 5px 16px rgba(0,0,0,.35)) !important;
        transition:transform .35s ease, filter .35s ease !important;
      }
      .sl-topbar .sl-brand:hover .sl-logo-img{
        transform:scale(1.035) !important;
        filter:drop-shadow(0 7px 22px rgba(242,202,80,.18)) !important;
      }
      .sl-topbar .sl-project-cta{
        position:relative !important;
        isolation:isolate !important;
        display:inline-flex !important;
        align-items:center !important;
        justify-content:center !important;
        gap:12px !important;
        min-width:178px !important;
        padding:13px 19px !important;
        border:1px solid rgba(242,202,80,.62) !important;
        border-radius:999px !important;
        background:linear-gradient(135deg,#f2ca50 0%,#d4af37 52%,#b58b24 100%) !important;
        color:#17130a !important;
        box-shadow:0 8px 28px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.38) !important;
        font-family:'Outfit',sans-serif !important;
        font-size:11px !important;
        font-weight:700 !important;
        letter-spacing:.14em !important;
        text-transform:uppercase !important;
        text-decoration:none !important;
        overflow:hidden !important;
        transition:transform .28s ease, box-shadow .28s ease, border-color .28s ease !important;
      }
      .sl-topbar .sl-project-cta::before{
        content:'' !important;
        position:absolute !important;
        inset:0 !important;
        background:linear-gradient(110deg,transparent 25%,rgba(255,255,255,.42) 48%,transparent 70%) !important;
        transform:translateX(-120%) !important;
        transition:transform .65s ease !important;
        pointer-events:none !important;
        z-index:-1 !important;
      }
      .sl-topbar .sl-project-cta:hover{
        transform:translateY(-2px) !important;
        border-color:#ffe088 !important;
        box-shadow:0 12px 34px rgba(212,175,55,.24), inset 0 1px 0 rgba(255,255,255,.48) !important;
      }
      .sl-topbar .sl-project-cta:hover::before{
        transform:translateX(120%) !important;
      }
      .sl-topbar .sl-project-cta-label{position:relative !important; z-index:1 !important;}
      .sl-topbar .sl-project-cta-arrow{
        position:relative !important;
        z-index:1 !important;
        display:inline-flex !important;
        align-items:center !important;
        justify-content:center !important;
        width:25px !important;
        height:25px !important;
        border:1px solid rgba(23,19,10,.22) !important;
        border-radius:50% !important;
        font-size:16px !important;
        line-height:1 !important;
        transition:transform .28s ease, background .28s ease !important;
      }
      .sl-topbar .sl-project-cta:hover .sl-project-cta-arrow{
        transform:translateX(3px) !important;
        background:rgba(255,255,255,.16) !important;
      }
      @media (max-width:767px){
        .sl-topbar .sl-logo-img{
          width:126px !important;
          height:48px !important;
        }
        .sl-topbar .sl-project-cta{
          min-width:0 !important;
          padding:11px 15px !important;
          gap:8px !important;
          font-size:10px !important;
        }
        .sl-topbar .sl-project-cta-arrow{
          width:22px !important;
          height:22px !important;
          font-size:14px !important;
        }
      }
    `;
    document.head.appendChild(s);
  }

  function shell(){
    document.body.classList.add('sl-shell-ready');
    if(document.querySelector('.sl-topbar')) return;
    const nav=document.createElement('header'); nav.className='sl-topbar'; nav.innerHTML=`
      <a class="sl-brand" href="${P.home}" aria-label="SL Creative home"><img class="sl-logo-img" src="logo.png" alt="SL Creative — Visuals That Inspire"></a>
      <nav class="sl-nav" aria-label="Primary navigation">
        <a data-route="home" href="${P.home}">Home</a><a data-route="work" href="${P.work}">Work</a><a data-route="services" href="${P.services}">Services</a><a data-route="studio" href="${P.studio}">Studio</a><a data-route="journal" href="${P.journal}">Journal</a>
        <div class="sl-explore"><button type="button" aria-expanded="false">Explore ▾</button><div class="sl-mega">
          <div><h4>Creative</h4><a href="${P.caseStudies}">Case Studies</a><a href="${P.reels}">Reels</a><a href="${P.process}">Process</a><a href="${P.lab}">Creative Lab</a><a href="${P.industries}">Industries</a></div>
          <div><h4>Studio</h4><a href="${P.team}">Team</a><a href="${P.careers}">Careers</a><a href="${P.awards}">Awards</a><a href="${P.testimonials}">Reviews</a><a href="${P.partners}">Partners</a><a href="${P.press}">Press</a></div>
          <div><h4>Client</h4><a href="${P.portal}">Client Portal</a><a href="${P.pricing}">Pricing Calculator</a><a href="${P.resources}">Resources</a><a href="${P.media}">Media Kit</a><a href="${P.support}">Support</a><a href="${P.sitemap}">All Pages ↗</a></div>
        </div></div>
      </nav>
      <div class="sl-actions"><a class="sl-cta sl-project-cta" href="${P.book}"><span class="sl-project-cta-label">Start a Project</span><span class="sl-project-cta-arrow">${icon('arrow')}</span></a><button class="sl-menu-btn" type="button" aria-label="Open menu" aria-expanded="false">${icon('menu')}</button></div>`;
    document.body.prepend(nav);
    const panel=document.createElement('div'); panel.className='sl-mobile-panel'; panel.innerHTML=`
      <div class="sl-mobile-section">Navigate</div><a href="${P.home}">Home</a><a href="${P.work}">Work</a><a href="${P.services}">Services</a><a href="${P.studio}">Studio</a><a href="${P.journal}">Journal</a><a href="${P.contact}">Contact</a><a href="${P.portal}">Client Portal</a><a href="${P.book}">Start a Project ↗</a>
      <div class="sl-mobile-section">Explore</div><a href="${P.caseStudies}">Case Studies</a><a href="${P.reels}">Reels</a><a href="${P.process}">Process</a><a href="${P.lab}">Creative Lab</a><a href="${P.team}">Team</a><a href="${P.careers}">Careers</a><a href="${P.awards}">Awards</a><a href="${P.testimonials}">Reviews</a><a href="${P.sitemap}">All Pages ↗</a>`;
    document.body.appendChild(panel);
    const back=document.createElement('button'); back.className='sl-backtop'; back.setAttribute('aria-label','Back to top'); back.textContent=icon('up'); document.body.appendChild(back);
    const top=nav.querySelector('.sl-explore'), menu=nav.querySelector('.sl-menu-btn');
    top.querySelector('button').addEventListener('click',e=>{e.stopPropagation();const open=top.classList.toggle('open');top.querySelector('button').setAttribute('aria-expanded',open)});
    menu.addEventListener('click',()=>{const open=panel.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.innerHTML=open?icon('close'):icon('menu')});
    document.addEventListener('click',e=>{if(!top.contains(e.target)) top.classList.remove('open'); if(!panel.contains(e.target)&&!menu.contains(e.target)){panel.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.innerHTML=icon('menu')}});
    const key = Object.entries(P).find(([,v])=>v===path)?.[0]; nav.querySelector(`[data-route="${key}"]`)?.classList.add('active');
    window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>20);back.classList.toggle('show',scrollY>420)},{passive:true});
    back.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
    document.querySelectorAll('main, body > section, body > div:not(.sl-topbar):not(.sl-mobile-panel):not(.sl-backtop):not(script)').forEach((el,i)=>{if(i<10) el.classList.add('sl-reveal')});
    footer();
  }
  function footer(){
    if(document.querySelector('.sl-footer') || path==='site-map.html') return;
    const f=document.createElement('footer'); f.className='sl-footer'; f.innerHTML=`<div class="sl-footer-inner">
      <div><h3>SL CREATIVE</h3><p>A premium visual studio for films, campaigns, digital experiences and brand stories.</p><p><a href="${P.book}">Start a project ↗</a></p></div>
      <div><h3>Studio</h3><p><a href="${P.studio}">Our Story</a><br><a href="${P.team}">Team</a><br><a href="${P.careers}">Careers</a><br><a href="${P.awards}">Awards</a></p></div>
      <div><h3>Work</h3><p><a href="${P.work}">Portfolio</a><br><a href="${P.caseStudies}">Case Studies</a><br><a href="${P.reels}">Reels</a><br><a href="${P.services}">Services</a></p></div>
      <div><h3>Client</h3><p><a href="${P.portal}">Portal</a><br><a href="${P.pricing}">Pricing</a><br><a href="${P.support}">Support</a><br><a href="${P.contact}">Contact</a></p></div>
    </div><div class="sl-footer-bottom"><span>© ${new Date().getFullYear()} SL Creative Studio</span><span><a href="${P.privacy}">Privacy</a> · <a href="${P.terms}">Terms</a> · <a href="${P.cookies}">Cookies</a> · <a href="${P.sitemap}">Site Map</a></span></div>`;
    document.body.appendChild(f);
  }
  function repairLinks(){
    document.querySelectorAll('a[href="#"], a[href=""]').forEach(a=>{const target=pickTarget(a.innerText||a.getAttribute('aria-label'));if(target)a.setAttribute('href',target)});
    document.querySelectorAll('a[href="/contact"]').forEach(a=>a.setAttribute('href',P.contact));
    // Normalize known duplicated/legacy routes to the clean public aliases.
    const aliases={
      'home-sl-creative.html':P.home,'portfolio-sl-creative.html':P.work,'services-sl-creative-premium.html':P.services,'our-story-sl-creative-premium.html':P.studio,
      'our-team-sl-creative-premium.html':P.team,'careers-sl-creative-premium.html':P.careers,'contact-sl-creative-premium.html':P.contact,
      'book-a-project-sl-creative-premium.html':P.book,'client-dashboard-sl-creative-portal.html':P.portal,'project-timeline-sl-creative-portal.html':P.timeline,
      'project-details-sl-creative.html':P.details,'project-files-sl-creative-portal.html':P.files,'invoice-sl-creative.html':P.invoice,
      'pricing-calculator-sl-creative-premium.html':P.pricing,'faq-sl-creative-premium.html':P.faq,'case-studies-sl-creative-premium.html':P.caseStudies,
      'blog-sl-creative-premium.html':P.journal,'terms-conditions-sl-creative-premium.html':P.terms,'privacy-policy-sl-creative.html':P.privacy,
      'cookie-policy-sl-creative.html':P.cookies,'refund-policy-sl-creative.html':P.refund,'cancellation-policy-sl-creative.html':P.cancellation,
      'licensing-nda-sl-creative.html':P.nda,'create-account-sl-creative-premium.html':P.signup,'login-sl-creative-premium.html':P.login
    };
    document.querySelectorAll('a[href]').forEach(a=>{const h=a.getAttribute('href'); if(aliases[h]) a.setAttribute('href',aliases[h]);});
  }
  document.addEventListener('DOMContentLoaded',()=>{injectSLBrandStyles();repairLinks();shell();});
})();
