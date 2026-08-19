// SL Creative unified navigation compatibility layer
// Most navigation is handled by js/site-shell.js. This file preserves legacy buttons.
document.addEventListener('DOMContentLoaded',()=>{
 const map=[
  ['home','index.html'],['work','portfolio.html'],['portfolio','portfolio.html'],['services','services.html'],['pricing','pricing-calculator.html'],['about','about.html'],['story','about.html'],['team','team.html'],['careers','careers.html'],['contact','contact.html'],['book','book.html'],['consultation','book.html'],['project','book.html'],['login','login.html'],['sign in','login.html'],['create account','create-account.html'],['sign up','create-account.html'],['dashboard','portal.html'],['client portal','portal.html'],['timeline','timeline.html'],['milestones','timeline.html'],['project details','project-details.html'],['files','files.html'],['invoice','invoice.html'],['payments','payments.html'],['quote','quote.html'],['resources','resources.html'],['support','support.html'],['case studies','case-studies.html'],['reels','reels.html'],['faq','faq-sl-creative-premium.html'],['terms','terms-conditions.html'],['privacy','privacy-policy.html'],['cookies','cookie-policy.html']
 ];
 document.querySelectorAll('a[href="#"],button').forEach(el=>{const text=(el.innerText||el.getAttribute('aria-label')||'').trim().toLowerCase(); if(!text)return; const hit=map.find(([k])=>text===k||text.includes(k)); if(hit && (el.getAttribute('href')==='#'||el.tagName==='BUTTON')){if(el.tagName==='A')el.href=hit[1];else el.addEventListener('click',()=>location.href=hit[1]);}});
});
