const games = [
  ['mechanical-planet','机械星球','自由探索','驾驶会变形的机器人，穿行四个区域，收集能量晶块，点亮信标。','WASD / 方向键移动，Shift 加速，空格跳跃，F 变形，E 互动，M 查看星球。','SegawaBeer/mechanical-planet','◉','#182d2d','#44b1ad'],
  ['infinite-future','Infinite Future','时空解谜','穿梭两个时代，寻找晶体与线索，改变过去，打开通向未来的路。','点击进入。WASD 移动，鼠标环顾，空格跳跃，取得折时仪后 E 切换时代，F 互动，R 重开。','nineteem526/Infinite-Future','⌛','#282238','#8e72b3'],
  ['hack-backfuture','光墙探索','奇境冒险','穿过展厅的光墙，进入地下洞穴，收集电池，沿发光圆盘渡过湖泊。','方向键行走和转向，按住 E 奔跑，Q 互动或取出电池，也可点击界面按钮。','Kiko-summer/hack-backfuture','✦','#183129','#79aa77'],
  ['cargoplan','3D 舱策','互动工作台','把真实货物装进集装箱。在 3D 视图中观察装载方案，探索海陆样例。','点击「加载示例」后开始优化；拖动旋转、滚轮缩放。计算在当前浏览器中进行。原文知识库检索需要原作者本地资料，网页版保留已打包知识。','SelinaTu/3D','▧','#24313b','#6f9faf'],
  ['memory-dome','公元 3026 · 出土文物馆','未来博物馆','一千年后，今天的日常用品成了文物。走进展厅，揭晓它们原来的模样。','→ / 空格推进，← 返回，WASD 自由行走，点击锁定鼠标，F 互动，R 重新开始。上传台为原项目演示功能。','YCD-Jerry/memory-dome','♜','#342b21','#bc976b'],
  ['boxing','拳击擂台','动作 / 体感','选择陪练，戴上拳套，在两分钟的回合中练习出拳、防守与连击。','点击「进入擂台」选择对手。J 左拳，K 右拳，按住空格防守；支持触屏。体感需主动授权摄像头，视频在浏览器内处理。','salathleizhang/boxing','🥊','#341e24','#b56165'],
  ['hi3d','故事造物社','店铺经营','挑选图纸、制作手办，经营自己的故事小店，收藏两关 24 款作品。','点击「开始试玩」，进入菜单后开始经营。滚轮缩放视角，使用鼠标选择图纸、生产与交易。内置作品无需 AI Token，首次加载素材较大。','Sirui0124/Hi3D-261108','◇','#252d39','#879bb5'],
  ['trust-price-game','信任的价格','策略 / 选择','走进小镇，与四位镇民交易。在七轮博弈中，决定何时信任、何时欺诈。','WASD 移动，拖动鼠标环顾，E 进入小屋，1 信任、2 欺诈，Esc 暂停。完成四场交易后观察世界演化。','darbengen/trust-price-game','◈','#322d1d','#b3a458'],
  ['pixel-desk-lab','Pixel Desk Lab','像素实验室','一间复古舱室、一张互动桌面。探索终端、收音机、录音机与台灯。','用鼠标点击或拖动道具控件，点击终端输入。演示解锁口令：HELLO WORLD。可切换观察视角、渲染模式和分辨率。','AleFoxhorn/pixel-desk-lab','▦','#292634','#a28aab']
];
const container = document.querySelector('#games');
games.forEach(([slug,name,tag,description,controls,repo,glyph,bg,glow],i)=>{
  const card = document.createElement('article'); card.className='card';
  card.style.setProperty('--bg',bg); card.style.setProperty('--glow',glow);
  card.innerHTML=`<a class="art" href="./games/${slug}/" aria-label="开始体验${name}"><span class="num">WORLD / ${String(i+1).padStart(2,'0')}</span><span class="glyph" aria-hidden="true">${glyph}</span><span class="tag">${tag}</span></a><div class="body"><div class="title-row"><h3>${name}</h3><small>${String(i+1).padStart(2,'0')}</small></div><p class="description">${description}</p><a class="play" href="./games/${slug}/">开始体验 <span aria-hidden="true">↗</span></a><details><summary>操作与来源</summary><p>${controls}</p><p>原作者：<a href="https://github.com/${repo}" target="_blank" rel="noopener">${repo} ↗</a></p></details></div>`;
  container.append(card);
});
document.querySelector('#share').addEventListener('click',async()=>{
  const url=new URL('./',location.href).href;
  try { await navigator.clipboard.writeText(url); document.querySelector('#share-status').textContent='大厅链接已复制，可以发给朋友了。'; }
  catch { document.querySelector('#share-status').textContent=`请复制地址栏中的链接：${url}`; }
});
