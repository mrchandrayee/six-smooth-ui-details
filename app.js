const scenes=[...document.querySelectorAll(".scene")],tabs=[...document.querySelectorAll(".tab")];
const meta={
 arc:["01 / ARC TO CART","Show where it went.","The item travels along a curved path into the cart. A small badge confirms the result.","Click “Add to cart” to watch the item travel."],
 morph:["02 / SUBMIT","Morph, don't swap.","The button changes shape into its loading state, then resolves into a clear success mark.","Press Send to see one control morph through its states."],
 cascade:["03 / LIST LOAD","Cascade, don't dump.","Four list rows enter one after another, with a 70 ms stagger between them.","Replay to reveal the rows in a cascade."],
 fling:["04 / SWIPE AWAY","Follow, then fling.","The card follows the pointer-like tilt first, then flicks away with momentum.","Tap the card to follow and fling it away."],
 flip:["05 / CARD FLIP","Flip with depth.","A 3D card rotates through 180 degrees, with perspective and a subtle lift.","Tap the card to flip between Spanish and English."],
 swing:["06 / NOTIFICATION","Swing, then settle.","The bell swings through smaller angles and settles naturally over 760 ms.","Tap the bell to replay its settling motion."]
};
let active="arc",cart=0;
function show(name){
 active=name;
 scenes.forEach(s=>{s.classList.toggle("active",s.dataset.scene===name);s.classList.remove("run")});
 tabs.forEach(t=>t.classList.toggle("active",t.dataset.target===name));
 const m=meta[name];document.getElementById("sceneNumber").textContent=m[0];document.getElementById("sceneTitle").textContent=m[1];document.getElementById("sceneDesc").textContent=m[2];document.getElementById("hint").textContent=m[3];
 resetCurrent();
}
function resetCurrent(){
 const s=document.querySelector(`[data-scene="${active}"]`);
 if(active==="morph"){const b=document.getElementById("sendButton");b.className="send-button";document.getElementById("morphState").classList.remove("visible")}
 if(active==="cascade"){s.classList.remove("run");s.querySelectorAll(".cascade-row").forEach(r=>{r.style.animation="none";r.offsetHeight;r.style.animation=""})}
 if(active==="fling"){const c=document.getElementById("flingCard");c.className="fling-card";c.style.opacity=1}
 if(active==="flip")document.getElementById("flipInner").classList.remove("flipped");
 if(active==="swing")document.getElementById("bellButton").classList.remove("ringing");
}
tabs.forEach(t=>t.addEventListener("click",()=>show(t.dataset.target)));
document.getElementById("addCart").addEventListener("click",()=>{
 const dot=document.getElementById("flyDot"),target=document.getElementById("cartTarget");
 dot.getAnimations().forEach(a=>a.cancel());dot.style.opacity=1;dot.style.transition="none";dot.style.left="calc(13% + 77px)";dot.style.top="50%";
 dot.animate([{left:"calc(13% + 77px)",top:"50%",transform:"scale(1)"},{left:"calc(48% + 40px)",top:"23%",transform:"scale(.8)"},{left:"calc(87% - 60px)",top:"25%",transform:"scale(.35)"}],{duration:500,easing:"cubic-bezier(.2,.7,.25,1)"}).onfinish=()=>{dot.style.opacity=0;cart++;document.getElementById("cartCount").textContent=cart;target.animate([{transform:"scale(1)"},{transform:"scale(1.12)"},{transform:"scale(1)"}],{duration:300})};
});
document.getElementById("sendButton").addEventListener("click",async()=>{
 const b=document.getElementById("sendButton"),state=document.getElementById("morphState");if(b.classList.contains("loading"))return;
 b.className="send-button loading";state.classList.add("visible");state.querySelector("b").textContent="Sending";
 await new Promise(r=>setTimeout(r,1050));b.className="send-button done";state.querySelector("b").textContent="Sent successfully";
});
document.getElementById("flingCard").addEventListener("click",e=>{
 const c=e.currentTarget;if(c.classList.contains("fling"))return;c.classList.add("follow");setTimeout(()=>c.classList.add("fling"),180);
});
document.getElementById("flipWrap").addEventListener("click",()=>document.getElementById("flipInner").classList.toggle("flipped"));
document.getElementById("bellButton").addEventListener("click",e=>{
 const b=e.currentTarget;b.classList.remove("ringing");void b.offsetWidth;b.classList.add("ringing");b.addEventListener("animationend",()=>b.classList.remove("ringing"),{once:true});
});
document.getElementById("replay").addEventListener("click",()=>{
 resetCurrent();
 if(active==="arc")document.getElementById("addCart").click();
 if(active==="morph")document.getElementById("sendButton").click();
 if(active==="cascade"){const s=document.querySelector('[data-scene="cascade"]');void s.offsetWidth;s.classList.add("run")}
 if(active==="fling")document.getElementById("flingCard").click();
 if(active==="flip")document.getElementById("flipInner").classList.add("flipped");
 if(active==="swing")document.getElementById("bellButton").click();
});
show("arc");
