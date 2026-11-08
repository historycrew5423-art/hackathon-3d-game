# 《奶蛙梦游记》的配音：用微软 Edge 朗读服务（edge-tts）合成，演示用。
# 用法：python gen_dream_voices.py   输出到 dl/dream/tts/*.mp3，日志 gen_dream_voices.log
# 声音挑选：老师 Yunjian（男声，念课文）、奶蛙 Xiaoyi（童声）、孙悟空 Yunxi 调高调快、沙僧 Yunyang、
#          高雅企鹅 en-GB Ryan（英式绅士，念中文拼读就是“老外口音”）、堂吉诃德 es-ES Alvaro、桑丘 es-MX Jorge
import asyncio, os, sys, traceback
import edge_tts

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'dl', 'dream', 'tts')
os.makedirs(OUT, exist_ok=True)

LINES = [
    # 课堂：老师念《庄周梦蝶》，奶蛙睡着
    ('teacher-intro', 'zh-CN-YunjianNeural', '-12%', '-2Hz', '昔者庄周梦为胡蝶，栩栩然胡蝶也……自喻适志与，不知周也……'),
    ('teacher-wake', 'zh-CN-YunjianNeural', '+8%', '+0Hz', '奶蛙！下课了还睡！你来说说，庄周梦蝶，讲的是什么？'),
    ('naiwa-answer', 'zh-CN-XiaoyiNeural', '+0%', '+10Hz', '不知周之梦为胡蝶与，胡蝶之梦为周与……还是，奶蛙之梦为牛来与？'),
    ('naiwa-72', 'zh-CN-XiaoyiNeural', '+12%', '+25Hz', '七十二变！'),
    ('naiwa-kaichuan', 'zh-CN-XiaoyiNeural', '+15%', '+20Hz', '开船咯！'),
    ('naiwa-zzz', 'zh-CN-XiaoyiNeural', '-25%', '-5Hz', '呼……呼……'),
    # 高雅企鹅：英式绅士念英语，再念一句中文拼读（老外口音）
    ('penguin-elegant', 'en-GB-RyanNeural', '-8%', '-4Hz', 'How elegant.'),
    ('penguin-exquisite', 'en-GB-RyanNeural', '-10%', '-6Hz', 'Exquisite.'),
    ('penguin-ohdear', 'en-GB-RyanNeural', '+0%', '+6Hz', 'Oh dear!'),
    ('penguin-dance', 'en-GB-RyanNeural', '-6%', '-4Hz', 'Shall we dance?'),
    ('penguin-youya', 'en-GB-RyanNeural', '-12%', '-6Hz', 'You yah, yong boo gwoh shrr.'),
    ('penguin-shh', 'en-GB-SoniaNeural', '-5%', '+0Hz', 'Shhh! Please, be elegant.'),
    # 孙悟空：调高调快，像猴子
    ('wukong-laugh', 'zh-CN-YunxiNeural', '+22%', '+38Hz', '嘿嘿嘿……哈哈哈哈哈哈！'),
    ('wukong-laizhe', 'zh-CN-YunxiNeural', '+12%', '+30Hz', '俺老孙来也！'),
    ('wukong-yaojing', 'zh-CN-YunxiNeural', '+15%', '+32Hz', '妖精，哪里跑！'),
    ('wukong-bang', 'zh-CN-YunxiNeural', '+15%', '+32Hz', '吃俺老孙一棒！'),
    ('wukong-shifu', 'zh-CN-YunxiNeural', '+15%', '+30Hz', '师父，她是妖精啊！'),
    # 沙僧
    ('sha-zhuazou', 'zh-CN-YunyangNeural', '+6%', '-6Hz', '大师兄，师父被妖怪抓走了！'),
    # 堂吉诃德和桑丘（西班牙语）
    ('quixote-gigantes', 'es-ES-AlvaroNeural', '+5%', '+0Hz', '¡Gigantes! ¡A la carga!'),
    ('quixote-dulcinea', 'es-ES-AlvaroNeural', '+0%', '+0Hz', '¡Por Dulcinea!'),
    ('quixote-victoria', 'es-ES-AlvaroNeural', '+0%', '+4Hz', '¡Victoria!'),
    ('sancho-molinos', 'es-MX-JorgeNeural', '+10%', '+6Hz', '¡Señor, que son molinos de viento!'),
    # 羊：堂吉诃德把羊群当成敌军
    ('sheep-mie', 'zh-CN-XiaoxiaoNeural', '+20%', '+50Hz', '咩——咩～'),
    # 11-07 晚上新加的角色：鲲（老师在现实里念《逍遥游》，梦里飞过一条鲸鱼女仆）、沙僧（鲸鱼女仆）、背手负鼠（白骨精变的老公公）
    ('teacher-kun', 'zh-CN-YunjianNeural', '-8%', '-2Hz', '北冥有鱼，其名为鲲。鲲之大……一锅炖不下。'),
    ('whale-baifan', 'zh-CN-XiaoxiaoNeural', '+6%', '+18Hz', '我是吃白饭的，蓝色大肥鱼～'),
    ('whale-zhuazou', 'zh-CN-XiaoxiaoNeural', '+10%', '+14Hz', '大师兄！师父被妖怪抓走了！'),
    ('whale-erxiong', 'zh-CN-XiaoxiaoNeural', '+10%', '+14Hz', '二师兄……也被抓走了。'),
    ('possum-hmm', 'zh-CN-YunyangNeural', '-22%', '-14Hz', '嗯……不错，不错。年轻人，要背着手走路。'),
]
ONLY = set(sys.argv[1:])
if ONLY: LINES = [l for l in LINES if l[0] in ONLY]

log = []
async def main():
    for name, voice, rate, pitch, text in LINES:
        path = os.path.join(OUT, name + '.mp3')
        try:
            await edge_tts.Communicate(text, voice, rate=rate, pitch=pitch).save(path)
            log.append(f'{name}\t{voice}\t{os.path.getsize(path) // 1024} KB\t{text}')
        except Exception:
            log.append(f'FAIL {name} {voice}\n' + traceback.format_exc())
asyncio.run(main())
with open(os.path.join(HERE, 'gen_dream_voices.log'), 'w', encoding='utf-8') as f:
    f.write('\n'.join(log) + '\nDONE\n')
