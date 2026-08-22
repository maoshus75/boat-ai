const races={
"戸田 10R":{probs:[48.2,17.6,13.9,9.8,6.1,4.4],rating:"★★★★★",pick:[1,2,3,4],ev:"A+",hole:76,gap:"+8.4pt",comment:"1号艇のイン戦を中心に評価。展示・STが良好で、オッズとの乖離もプラス。現時点では1号艇を軸にする期待値が高いと判定しています。",bets:["1-2 ワイド","1-3 ワイド","1-2-3 3連複"]},
"平和島 8R":{probs:[34.5,20.1,17.3,12.4,9.0,6.7],rating:"★★★★☆",pick:[1,2,3,4],ev:"A",hole:82,gap:"+5.1pt",comment:"1号艇優勢だが戸田より差が小さい。2・3号艇の差し残りを評価し、穴候補は4号艇。",bets:["1-2 ワイド","1-3 ワイド","1-2-4 3連複"]},
"江戸川 11R":{probs:[29.1,23.8,18.2,13.5,8.7,6.7],rating:"★★★☆☆",pick:[1,2,3,4],ev:"B",hole:91,gap:"+2.3pt",comment:"水面傾向を考慮するとイン信頼度はやや低め。2・3号艇の絡みを厚く見る一方、期待値が十分でなければ見送り候補。",bets:["1-2 ワイド","2-3 ワイド","1-2-3 3連複"]}
};
function render(name){
 const r=races[name]; document.getElementById("raceName").textContent=name;
 document.getElementById("rating").textContent=r.rating; document.getElementById("ev").textContent=r.ev;
 document.getElementById("hole").textContent=r.hole; document.getElementById("gap").textContent=r.gap;
 document.getElementById("mainPick").textContent=r.pick[0]; document.getElementById("pickName").textContent=r.pick[0]+"号艇";
 document.getElementById("confidence").textContent="AI勝率 "+r.probs[r.pick[0]-1].toFixed(1)+"%";
 document.getElementById("comment").textContent=r.comment;
 ["pick1","pick2","pick3","pick4"].forEach((id,i)=>document.getElementById(id).textContent=r.pick[i]+"号艇");
 const p=document.getElementById("probabilities"); p.innerHTML="";
 r.probs.forEach((v,i)=>{p.innerHTML+=`<div class="barrow"><b>${i+1}</b><div class="bar"><i style="width:${v}%"></i></div><b>${v.toFixed(1)}%</b></div>`});
 const b=document.getElementById("bets"); b.innerHTML=r.bets.map((x,i)=>`<div><span>推奨 ${i+1}</span><strong>${x}</strong></div>`).join("");
}
document.querySelectorAll(".race-card").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".race-card").forEach(x=>x.classList.remove("active"));btn.classList.add("active");render(btn.dataset.race);
}));
render("戸田 10R");