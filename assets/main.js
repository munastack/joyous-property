(function(){
var WA="2349169555910";
function wa(t){return "https://wa.me/"+WA+"?text="+encodeURIComponent(t)}
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=wa(a.getAttribute("data-wa"));a.target="_blank";a.rel="noopener"});
document.getElementById("yr").textContent=new Date().getFullYear();
var b=document.querySelector(".burger"),n=document.getElementById("nav");
b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
n.addEventListener("click",function(e){if(e.target.tagName==="A"){n.classList.remove("open");b.setAttribute("aria-expanded","false")}});
document.querySelectorAll("[data-prop]").forEach(function(a){a.addEventListener("click",function(){
var s=document.getElementById("propSel"),v=a.getAttribute("data-prop");
for(var i=0;i<s.options.length;i++){if(s.options[i].text===v)s.selectedIndex=i}})});
/* search */
function filter(){
var l=document.getElementById("fLoc").value,t=document.getElementById("fType").value,p=document.getElementById("fBud").value,c=0;
document.querySelectorAll("#list .card").forEach(function(el){
var pr=+el.dataset.price,ok=(!l||el.dataset.loc===l)&&(!t||el.dataset.type===t)&&(!p||(p==="5"?pr<=5:pr>5));
el.style.display=ok?"":"none";if(ok)c++});
document.getElementById("count").textContent=c+(c===1?" property available":" properties available");
document.getElementById("empty").style.display=c?"none":"block"}
document.getElementById("heroSearch").addEventListener("submit",function(e){e.preventDefault();filter();document.getElementById("properties").scrollIntoView()});
["fLoc","fType","fBud"].forEach(function(i){document.getElementById(i).addEventListener("change",filter)});
/* booking: opens WhatsApp with details, shows confirmation */
var f=document.getElementById("bookForm"),m=document.getElementById("bookMsg"),last=0;
f.addEventListener("submit",function(e){
e.preventDefault();m.className="msg";
var d=new FormData(f);
if(d.get("website")){return}
var name=(d.get("name")||"").trim(),ph=(d.get("phone")||"").trim();
if(!name||!/^\+?[0-9 ]{7,18}$/.test(ph)||!d.get("date")||!f.consent.checked){m.className="msg err";m.textContent="Please enter your name, a valid phone number, a date, and tick the consent box.";return}
if(Date.now()-last<5000)return;last=Date.now();
var t="Inspection request\nName: "+name+"\nPhone: "+ph+"\nProperty: "+d.get("prop")+"\nDate: "+d.get("date")+" ("+d.get("slot")+")\nVisitors: "+d.get("visitors");
m.className="msg ok";m.textContent="Thanks, "+name+". Tap Send in WhatsApp to confirm your request. We will reply to confirm your slot.";
window.open(wa(t),"_blank","noopener");
f.reset()});
})();
